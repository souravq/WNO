import { Request, Response } from "express";
import {NewsService} from "./news.service"

// Create a new news article
async function createNews(req:Request, res:Response) {
  try {
    const data = req.body;
    const newArticle = await NewsService.createNewsArticle(data);
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create news article' });
  }
}

// Get all news articles
async function getAllNews(req:Request, res:Response) {
  try {
    const articles = await NewsService.getAllNewsArticles();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news articles' });
  }
}

// Get a single news article by ID
async function getNewsById(req:Request, res:Response) {
  const { id } = req.params;
  try {
    const article = await NewsService.getNewsArticleById(id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch article' });
  }
}

// Update a news article
async function updateNews(req:Request, res:Response) {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedArticle = await NewsService.updateNewsArticle(id, data);
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update article' });
  }
}

// Delete a news article
async function deleteNews(req:Request, res:Response) {
  const { id } = req.params;
  try {
    await NewsService.deleteNewsArticle(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete article' });
  }
}

// Publish a news article
async function publishNews(req:Request, res:Response) {
  const { id } = req.params;
  try {
    const publishedArticle = await NewsService.publishNewsArticle(id);
    res.status(200).json(publishedArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to publish article' });
  }
}

export const NewsController= {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
  publishNews
};
