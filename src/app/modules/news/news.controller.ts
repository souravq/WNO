import { Request, Response } from 'express';
import { NewsService } from './news.service.js';

interface ResponseData {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: any;
  data?: any;
}

// Create a new news article
async function createNews(req: Request, res: Response) {
  try {
    const data = req.body;
    const newArticle = await NewsService.createNewsArticle(data);

    const responseData: ResponseData = {
      statusCode: 201,
      success: true,
      message: 'News article created successfully',
      data: newArticle,
    };

    res.status(responseData.statusCode).json(responseData);
  } catch (error) {
    const responseData: ResponseData = {
      statusCode: 500,
      success: false,
      message: 'Failed to create news article',
    };

    res.status(responseData.statusCode).json(responseData);
  }
}

// Get all news articles
async function getAllNews(req: Request, res: Response) {
  try {
    const articles = await NewsService.getAllNewsArticles();

    const responseData: ResponseData = {
      statusCode: 200,
      success: true,
      message: 'Fetched all news articles successfully',
      data: articles,
    };

    res.status(responseData.statusCode).json(responseData);
  } catch (error) {
    const responseData: ResponseData = {
      statusCode: 500,
      success: false,
      message: 'Failed to fetch news articles',
    };

    res.status(responseData.statusCode).json(responseData);
  }
}

// Get a single news article by ID
async function getNewsById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const article = await NewsService.getNewsArticleById(id);
    if (!article) {
      const responseData: ResponseData = {
        statusCode: 404,
        success: false,
        message: 'Article not found',
      };

      return res.status(responseData.statusCode).json(responseData);
    }

    const responseData: ResponseData = {
      statusCode: 200,
      success: true,
      message: 'Fetched news article successfully',
      data: article,
    };

    res.status(responseData.statusCode).json(responseData);
  } catch (error) {
    const responseData: ResponseData = {
      statusCode: 500,
      success: false,
      message: 'Failed to fetch article',
    };

    res.status(responseData.statusCode).json(responseData);
  }
}

// Update a news article
async function updateNews(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedArticle = await NewsService.updateNewsArticle(id, data);

    const responseData: ResponseData = {
      statusCode: 200,
      success: true,
      message: 'News article updated successfully',
      data: updatedArticle,
    };

    res.status(responseData.statusCode).json(responseData);
  } catch (error) {
    const responseData: ResponseData = {
      statusCode: 500,
      success: false,
      message: 'Failed to update article',
    };

    res.status(responseData.statusCode).json(responseData);
  }
}

// Delete a news article
async function deleteNews(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await NewsService.deleteNewsArticle(id);

    const responseData: ResponseData = {
      statusCode: 200,
      success: true,
      message: 'News article deleted successfully',
    };

    res.status(responseData.statusCode).json(responseData);
  } catch (error) {
    const responseData: ResponseData = {
      statusCode: 500,
      success: false,
      message: 'Failed to delete article',
    };

    res.status(responseData.statusCode).json(responseData);
  }
}

// Publish a news article
async function publishNews(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const publishedArticle = await NewsService.publishNewsArticle(id);

    const responseData: ResponseData = {
      statusCode: 200,
      success: true,
      message: 'News article published successfully',
      data: publishedArticle,
    };

    res.status(responseData.statusCode).json(responseData);
  } catch (error) {
    const responseData: ResponseData = {
      statusCode: 500,
      success: false,
      message: 'Failed to publish article',
    };

    res.status(responseData.statusCode).json(responseData);
  }
}

export const NewsController = {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
  publishNews,
};
