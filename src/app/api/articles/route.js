import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {

    const articles = await prisma.Article.findMany({
        select: {
          id: true,
          title: true,
          summary: true,
          likes: true,
          numberOfComments: true
        }
      });

    return NextResponse.json(articles,{status:200})
    
  } catch (error) {

    return NextResponse.json({ error: "An issue occurred while fetching articles" },{status:500})
    
  }
}

export async function POST(req) {
    try {
      const body = await req.json();
      const { title, content, summary, author } = body;
  
      // Vérifier si les champs requis sont présents
      if (!title || !content || !summary || !author) {
        return NextResponse.json({ error: "Tous les champs requis doivent être remplis." }, { status: 400 });
      }
  
      // Créer un nouvel article
      const newArticle = await prisma.article.create({
        data: {
          title,
          content,
          summary,
          author, // Auteur de l'article
        }
      });
  
      return NextResponse.json(newArticle, { status: 201 }); // 201 signifie "Created"
  
    } catch (error) {
      return NextResponse.json({ error: "Erreur lors de la création de l'article." }, { status: 500 });
    }
  }