const sanitizeMarkdown = require("../utils/markdownSanitizer");

class ProblemService{
    constructor(problemRepo){
        this.problemRepo = problemRepo;
    }

    async createProblem(problemData){
        try {
            problemData.description = sanitizeMarkdown(problemData.description);
            const problem = await this.problemRepo.createProblem(problemData);
            return problem;
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try {
            const problems = await this.problemRepo.getAllProblems();
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id){
        try {
            const problem = await this.problemRepo.getProblem(id);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id){
        try {
            const response = await this.problemRepo.deleteProblem(id);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async updateProblem(id, data){
        try {
            const response = await this.problemRepo.updateProblem(id, data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemService;