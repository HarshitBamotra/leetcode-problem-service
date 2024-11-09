const { response } = require("express");
const NotFoundError = require("../errors/notFound.error");
const {Problem} = require("../models");
const logger = require("../config/logger.config");

class ProblemRepo{
    async createProblem(problemData){
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : [],
                difficulty: problemData.difficulty ? problemData.difficulty : "easy",
                codeStubs: problemData.codeStubs
            });
            
            return problem;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id){
        try {
            const problem = await Problem.findById(id);
            
            if(!problem){
                throw new NotFoundError("Problem", id);
            }

            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id){
        try {
            const deletedProblem = await Problem.findByIdAndDelete(id);
            if(!deletedProblem){
                logger.error(`Problem with id: ${id} was not found`);
                throw new NotFoundError("Problem", id);
            }
            return deletedProblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(id, data){
        try {
            const updatedProblem = await Problem.findByIdAndUpdate(id, data, {new: true});
            if(!updatedProblem){

                throw new NotFoundError("Problem", id);
            }
            return updatedProblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}


module.exports = ProblemRepo;