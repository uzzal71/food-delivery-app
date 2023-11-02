import { CategoryService } from "../../../services/SuperAdmin/CategoryService"
import { ResponseError, ResponseSuccess } from "../../utility/HttpResponse";

export class CategoryController {
    constructor() {
        this.categoryService = new CategoryService();
    }
     /**
     * @objective achive all categories
     * @method get
     * @req parameter received
     * @res parameter received
     */
    getCategories = async(req, res) => {
        try {
            const result = await this.categoryService.getCategories(req);
            return ResponseSuccess(res, 200, "Category get successfully", result);
        } catch (error) {
            return ResponseError(res, error.statusCode, error.message());
        }
    }
    /**
     * @objective create a single category
     * @method post
     * @req parameter received
     * @res parameter received
     */
    createCategory = async(req, res) => {}
    /**
     * @objective achine single category
     * @method get
     * @req parameter received
     * @res parameter received
     */
    getCategory = async(req, res) => {}
    /**
     * @objective update a single category
     * @method put
     * @req parameter received
     * @res parameter received
     */
    updateCategory = async(req, res) => {}
    /**
     * @objective delete a single category
     * @method delete
     * @req parameter received
     * @res parameter received
     */
    destoryCategory = async(req, res) => {}
}