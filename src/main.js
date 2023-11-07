import express from "express";
import formData from "express-form-data";
import os from "os";
import RouteNotFoundExceptionMiddleware from "./app/http/middleware/RouteNotFoundExceptionMiddleware";
import Config from "./config";
import sequelize from "./config/sequelize";
import routeConfig from "./routes";
import connect from "./server/dbConnect";

const app = express();
/**
 * Form data configaration
 */
const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
};
app.use(formData.parse(options));
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());
/**
 * App running route
 */
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `Server running on port ${Config.APP_PORT || 3000}`,
        apiUrl: `${process.env.APP_URL || 'http://localhost:3000' }/v1`,
    })
});
/**
 * Define routes
 */
routeConfig(app);
app.use(RouteNotFoundExceptionMiddleware);
/**
 * Database connection
 */
connect()
  .then(() => {
  })
  .catch((err) => {
    console.log(err);
  });
/**
 * App listen
 */
app.listen(Config.APP_PORT, async() => {
    console.log('\x1b[32m', `[Node Server Running] Server running on port ${Config.APP_PORT || 3000}`, '\x1b[0m')
    await sequelize.sync({alter:true});
})