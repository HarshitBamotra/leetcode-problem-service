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

async function getProblem(req, res, next){
    try {
        const problem = await problemService.getProblem(req.params.id);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Problem Fetched Successfully",
            err:{},
            data: problem
        })
    } catch (error) {
        next(error);
    }
}

async function getProblems(req, res, next){
    try {
        const problems = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Problems Fetched Successfully",
            err:{},
            data: problems
        })
    } catch (error) {
        next(error);
    }
}

async function deleteProblem(req, res, next){
    try {
        const deletedProblem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Problem deleted successfully",
            err:{},
            data: deletedProblem,
        })
    } catch (error) {
        next(error);
    }
}

async function updateProblem(req, res, next){
    try {
        const updatedProblem = await problemService.updateProblem(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Problem updated successfully",
            err:{},
            data: updatedProblem,
        })
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