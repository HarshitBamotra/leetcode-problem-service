const express = require("express");
const { ProblemController } = require("../../controllers");

const problemRouter = express.Router();

problemRouter.post("/", ProblemController.addProblem);
problemRouter.get("/ping", ProblemController.pingProblemController);
problemRouter.get("/:id", ProblemController.getProblem);
problemRouter.get("/", ProblemController.getProblems);
problemRouter.delete("/:id", ProblemController.deleteProblem);
problemRouter.patch("/:id", ProblemController.updateProblem);


module.exports = problemRouter;