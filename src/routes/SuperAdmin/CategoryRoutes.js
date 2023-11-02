import express from "express";
import { CategoryController } from "../../app/http/controllers/SuperAdmin/CategoryController";

const CategoryRoutes = express.Router();
const CategoryObject = new CategoryController();

CategoryRoutes.get("/", CategoryObject.getCategories);

export default CategoryRoutes;