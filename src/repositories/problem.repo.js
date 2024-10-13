const {Problem} = require("../models");

class ProblemRepo{
    async createProblem(problemData){
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : [],
                difficulty: problemData.difficulty ? problemData.difficulty : "easy",
            });
            
            return problem;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}


module.exports = ProblemRepo;