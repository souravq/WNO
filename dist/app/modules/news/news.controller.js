"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsController = void 0;
const news_service_1 = require("./news.service");
// Create a new news article
function createNews(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const newArticle = yield news_service_1.NewsService.createNewsArticle(data);
            const responseData = {
                statusCode: 201,
                success: true,
                message: 'News article created successfully',
                data: newArticle,
            };
            res.status(responseData.statusCode).json(responseData);
        }
        catch (error) {
            const responseData = {
                statusCode: 500,
                success: false,
                message: 'Failed to create news article',
            };
            res.status(responseData.statusCode).json(responseData);
        }
    });
}
// Get all news articles
function getAllNews(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const articles = yield news_service_1.NewsService.getAllNewsArticles();
            const responseData = {
                statusCode: 200,
                success: true,
                message: 'Fetched all news articles successfully',
                data: articles,
            };
            res.status(responseData.statusCode).json(responseData);
        }
        catch (error) {
            const responseData = {
                statusCode: 500,
                success: false,
                message: 'Failed to fetch news articles',
            };
            res.status(responseData.statusCode).json(responseData);
        }
    });
}
// Get a single news article by ID
function getNewsById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const article = yield news_service_1.NewsService.getNewsArticleById(id);
            if (!article) {
                const responseData = {
                    statusCode: 404,
                    success: false,
                    message: 'Article not found',
                };
                return res.status(responseData.statusCode).json(responseData);
            }
            const responseData = {
                statusCode: 200,
                success: true,
                message: 'Fetched news article successfully',
                data: article,
            };
            res.status(responseData.statusCode).json(responseData);
        }
        catch (error) {
            const responseData = {
                statusCode: 500,
                success: false,
                message: 'Failed to fetch article',
            };
            res.status(responseData.statusCode).json(responseData);
        }
    });
}
// Update a news article
function updateNews(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        try {
            const updatedArticle = yield news_service_1.NewsService.updateNewsArticle(id, data);
            const responseData = {
                statusCode: 200,
                success: true,
                message: 'News article updated successfully',
                data: updatedArticle,
            };
            res.status(responseData.statusCode).json(responseData);
        }
        catch (error) {
            const responseData = {
                statusCode: 500,
                success: false,
                message: 'Failed to update article',
            };
            res.status(responseData.statusCode).json(responseData);
        }
    });
}
// Delete a news article
function deleteNews(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield news_service_1.NewsService.deleteNewsArticle(id);
            const responseData = {
                statusCode: 200,
                success: true,
                message: 'News article deleted successfully',
            };
            res.status(responseData.statusCode).json(responseData);
        }
        catch (error) {
            const responseData = {
                statusCode: 500,
                success: false,
                message: 'Failed to delete article',
            };
            res.status(responseData.statusCode).json(responseData);
        }
    });
}
// Publish a news article
function publishNews(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const publishedArticle = yield news_service_1.NewsService.publishNewsArticle(id);
            const responseData = {
                statusCode: 200,
                success: true,
                message: 'News article published successfully',
                data: publishedArticle,
            };
            res.status(responseData.statusCode).json(responseData);
        }
        catch (error) {
            const responseData = {
                statusCode: 500,
                success: false,
                message: 'Failed to publish article',
            };
            res.status(responseData.statusCode).json(responseData);
        }
    });
}
exports.NewsController = {
    createNews,
    getAllNews,
    getNewsById,
    updateNews,
    deleteNews,
    publishNews,
};
