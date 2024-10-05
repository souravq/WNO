import express from "express";
import {NewsController} from "./news.controller.js";

const router = express.Router();

router.post('/news', NewsController.createNews);
router.get('/news', NewsController.getAllNews);
router.get('/news/:id', NewsController.getNewsById);
router.put('/news/:id', NewsController.updateNews);
router.delete('/news/:id', NewsController.deleteNews);
router.patch('/news/:id/publish', NewsController.publishNews);

export default router;

