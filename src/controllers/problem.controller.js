const {StatusCodes} = require('http-status-codes');
const NotImplementedError = require('../errors/notImplemented.error');


function pingProblemController(req, res, next){
    try {
        throw new NotImplementedError('ping');
    } catch (error) {
        next(error);
    }
}

function addProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        msg: "NOT IMPLEMENTED"
    });
}

function getProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        msg: "NOT IMPLEMENTED"
    });
}

function getProblems(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        msg: "NOT IMPLEMENTED"
    });
}

function deleteProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        msg: "NOT IMPLEMENTED"
    });
}

function updateProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        msg: "NOT IMPLEMENTED"
    });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems, 
    deleteProblem,
    updateProblem,
    pingProblemController
};