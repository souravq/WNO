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
exports.NewsService = void 0;
const prisma = require('../../models/prisma');
// Create a new news article
function createNewsArticle(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.masternewsarticle.create({
            data
        });
    });
}
// Get all news articles
function getAllNewsArticles() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.masternewsarticle.findMany();
    });
}
// Get a single news article by ID
function getNewsArticleById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.masternewsarticle.findUnique({
            where: { id: parseInt(id) }
        });
    });
}
// Update a news article
function updateNewsArticle(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.masternewsarticle.update({
            where: { id: parseInt(id) },
            data
        });
    });
}
// Delete a news article
function deleteNewsArticle(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.masternewsarticle.delete({
            where: { id: parseInt(id) }
        });
    });
}
// Publish a news article
function publishNewsArticle(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.masternewsarticle.update({
            where: { id: parseInt(id) },
            data: {
                status: 'PUBLISHED',
                publishedAt: new Date()
            }
        });
    });
}
exports.NewsService = {
    createNewsArticle,
    getAllNewsArticles,
    getNewsArticleById,
    updateNewsArticle,
    deleteNewsArticle,
    publishNewsArticle
};
