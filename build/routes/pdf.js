"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pdf_1 = __importDefault(require("../controllers/pdf"));
class PDFRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", pdf_1.default.getAll);
        this.router.post("/", pdf_1.default.Insert);
    }
}
const pdfroutes = new PDFRoutes();
exports.default = pdfroutes.router;
