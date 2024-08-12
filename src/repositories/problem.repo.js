const Problem = require("../models/problem.model");

class ProblemRepo{
    async createProblem(problemData){
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
            });
            
            return problem;


        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}


module.exports = ProblemRepo;