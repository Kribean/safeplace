import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req, { params }) {
    
    try {
      const { id } = params; // Utiliser req.query pour récupérer les paramètres dynamiques

      if (!id) {
        return NextResponse.json({ error: "ID manquant" }, { status: 400 });
      }
  
      // Récupérer l'enregistrement spécifique de CardActiv
      const article = await prisma.article.findUnique({
        where: { id },
        select: {
            id: true,
            title: true,
            summary: true,
            likes: true,
            numberOfComments: true,
            comments: true,
            content: true,
            author:true
          }
      });
  
      if (!article) {
        return NextResponse.json({ error: "article no found" }, { status: 404 });
      }
  
      return NextResponse.json(article, { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error: "Error during recovering " }, { status: 500 });
    }
  }
  