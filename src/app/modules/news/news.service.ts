//const prisma = require('../../models/prisma.js');
import prisma from "../../models/prisma.js";

// Create a new news article
async function createNewsArticle(data:any) {
  return await prisma.masternewsarticle.create({
    data
  });
}

// Get all news articles
async function getAllNewsArticles() {
  return await prisma.masternewsarticle.findMany();
}

// Get a single news article by ID
async function getNewsArticleById(id:any) {
  return await prisma.masternewsarticle.findUnique({
    where: { id: parseInt(id) }
  });
}

// Update a news article
async function updateNewsArticle(id:any, data:any) {
  return await prisma.masternewsarticle.update({
    where: { id: parseInt(id) },
    data
  });
}

// Delete a news article
async function deleteNewsArticle(id:any) {
  return await prisma.masternewsarticle.delete({
    where: { id: parseInt(id) }
  });
}

// Publish a news article
async function publishNewsArticle(id:any) {
  return await prisma.masternewsarticle.update({
    where: { id: parseInt(id) },
    data: {
      status: 'PUBLISHED',
      publishedAt: new Date()
    }
  });
}

export const NewsService = {
  createNewsArticle,
  getAllNewsArticles,
  getNewsArticleById,
  updateNewsArticle,
  deleteNewsArticle,
  publishNewsArticle
};
