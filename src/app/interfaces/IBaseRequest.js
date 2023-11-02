// Import Express
const { Request } = require("express");

// Define the IBaseRequest interface
class IBaseRequest extends Request {
    constructor() {
        super(...arguments);
        this.user = null;
    }

    validate() {
        return false;
    }
}

// Export the interface
export default IBaseRequest;
