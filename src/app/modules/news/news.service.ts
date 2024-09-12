const prisma = require('../../models/prisma');

// Create a new news article
async function createNewsArticle(data:any) {
  return await prisma.newsArticle.create({
    data
  });
}

// Get all news articles
async function getAllNewsArticles() {
  return await prisma.newsArticle.findMany();
}

// Get a single news article by ID
async function getNewsArticleById(id:any) {
  return await prisma.newsArticle.findUnique({
    where: { id: parseInt(id) }
  });
}

// Update a news article
async function updateNewsArticle(id:any, data:any) {
  return await prisma.newsArticle.update({
    where: { id: parseInt(id) },
    data
  });
}

// Delete a news article
async function deleteNewsArticle(id:any) {
  return await prisma.newsArticle.delete({
    where: { id: parseInt(id) }
  });
}

// Publish a news article
async function publishNewsArticle(id:any) {
  return await prisma.newsArticle.update({
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
