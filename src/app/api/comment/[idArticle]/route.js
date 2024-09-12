import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req,{params}) {
  try {

    const comments = await prisma.comment.findMany({
      select: {
        id: true,
        content: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "An issue occurred while fetching comments" },
      { status: 500 }
    );
  }
}

export async function POST(req,{params}) {
  try {

    const {idArticle}=params;
    const body = await req.json();
    const {
      content,
    } = body;

    // Vérifier si les champs requis sont présents
    if (!idArticle || !content) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis." },
        { status: 400 }
      );
    }

    // Créer un nouvel article
    const newComment = await prisma.comment.create({
      data: {
        content,
        articleId:idArticle
      },
    });

    return NextResponse.json(newComment, { status: 201 }); // 201 signifie "Created"
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la création du commentaire." },
      { status: 500 }
    );
  }
}
