import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    // Extraire les paramètres de requête via req.url
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`);

    // Utiliser searchParams pour obtenir 'page' et 'limit'
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    if (isNaN(page) || isNaN(limit) || page <= 0 || limit <= 0) {
      return res.status(400).json({ error: "Invalid page or limit value" });
    }
    const articles = await prisma.Article.findMany({
      select: {
        id: true,
        title: true,
        summary: true,
        likes: true,
        numberOfComments: true,
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "An issue occurred while fetching articles" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      title,
      content,
      summary,
      author,
      keywords,
      isForMale,
      thematic,
      isForFemale,
    } = body;

    // Vérifier si les champs requis sont présents
    if (!title || !content || !summary || !author) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis." },
        { status: 400 }
      );
    }

    // Créer un nouvel article
    const newArticle = await prisma.article.create({
      data: {
        title,
        content,
        summary,
        author,
        keywords,
        isForMale,
        thematic,
        isForFemale,
      },
    });

    return NextResponse.json(newArticle, { status: 201 }); // 201 signifie "Created"
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la création de l'article." },
      { status: 500 }
    );
  }
}
