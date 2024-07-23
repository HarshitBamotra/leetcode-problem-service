const BaseError = require("./base.error");
const {StatusCodes} = require("http-status-codes");

class BadRequest extends BaseError{
    constructor(propertyName, details){
        super("BAD REQUEST", StatusCodes.BAD_REQUEST, `invalid structure for ${propertyName} provided`, details)
    }
}

module.exports = BadRequest;