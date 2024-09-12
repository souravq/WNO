"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const news_controller_1 = require("./news.controller");
const router = express_1.default.Router();
router.post('/news', news_controller_1.NewsController.createNews);
router.get('/news', news_controller_1.NewsController.getAllNews);
router.get('/news/:id', news_controller_1.NewsController.getNewsById);
router.put('/news/:id', news_controller_1.NewsController.updateNews);
router.delete('/news/:id', news_controller_1.NewsController.deleteNews);
router.patch('/news/:id/publish', news_controller_1.NewsController.publishNews);
exports.default = router;
