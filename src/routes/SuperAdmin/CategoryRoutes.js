import express from "express";
import { getCategories } from "../../app/http/controllers/SuperAdmin/CategoryController";

const CategoryRoutes = express.Router();

CategoryRoutes.get("/", getCategories);

export default CategoryRoutes;