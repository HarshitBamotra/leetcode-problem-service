const BaseError = require("./base.error");
const {StatusCodes} = require("http-status-codes");


class InternalServerError extends BaseError{
    constructor(details){
        super("INTERNAL SERVER ERROR", StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong!", details);
    }
}

module.exports = InternalServerError;