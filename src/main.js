import express from "express";
import Config from "./config";
import os from "os"
import formData from "express-form-data";
import RouteNotFoundExceptionMiddleware from "./app/http/middleware/RouteNotFoundExceptionMiddleware";

const app = express();
const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
};

app.use(formData.parse(options));
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());


app.get("/", (req, res) => {
    res.status(200).json({
        status: true,
        message: "food delivery app"
    })
});

app.use(RouteNotFoundExceptionMiddleware);

app.listen(Config.APP_PORT, () => {
    console.log('\x1b[32m', `[Node Server Running] Server running on port ${Config.APP_PORT || 3000}`, '\x1b[0m')
})