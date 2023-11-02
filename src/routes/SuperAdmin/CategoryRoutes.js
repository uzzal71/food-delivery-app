import express from "express";

const CategoryRoutes = express.Router();

CategoryRoutes.get("/", (req, res) => {
    res.status(200).json({ message: "welcome category routes" })
});

export default CategoryRoutes;