"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const news_router_1 = __importDefault(require("./app/modules/news/news.router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// app.use('/', (req, res) => {
//   res.send('Hello World');
// });
// News Management Routes
app.use('/api/v1', news_router_1.default);
app.listen(5000, () => {
    console.log('Server started on port 5000');
});
// Export the app instead of starting the server
exports.default = app;
