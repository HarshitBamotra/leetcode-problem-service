const {NotImplementedError, BadRequestError, BaseError, InternalServerError} = require("../errors");
const {ProblemService} = require("../services");
const {ProblemRepository} = require("../repositories");
const { StatusCodes } = require("http-status-codes");


const problemService = new ProblemService(new ProblemRepository());


function pingProblemController(req, res, next){
    return res.json("problem controller is up");
}

async function addProblem(req, res, next){
    try {
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "New Problem Created Successfully",
            err:{},
            data: newProblem
        });
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res, next){
    try {
        throw new NotImplementedError('Get Problem');
    } catch (error) {
        next(error);
    }
}

async function getProblems(req, res, next){
    try {
        const problems = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Problems Fetcheed Successfully",
            err:{},
            data: problems
        })
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res, next){
    try {
        throw new NotImplementedError('Delete Problem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next){
    try {
        throw new NotImplementedError('Update Problem');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems, 
    deleteProblem,
    updateProblem,
    pingProblemController
};