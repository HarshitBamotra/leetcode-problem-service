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
            
        }
    }

}