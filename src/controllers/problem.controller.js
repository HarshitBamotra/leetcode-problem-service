
function pingProblemController(req, res){
    return res.json({
        msg: "api is working fine"
    });
}

function addProblem(req, res){
    return res.status(501).json({
        msg: "NOT IMPLEMENTED"
    });
}

function getProblem(req, res){
    return res.status(501).json({
        msg: "NOT IMPLEMENTED"
    });
}

function getProblems(req, res){
    return res.status(501).json({
        msg: "NOT IMPLEMENTED"
    });
}

function deleteProblem(req, res){
    return res.status(501).json({
        msg: "NOT IMPLEMENTED"
    });
}

function updateProblem(req, res){
    return res.status(501).json({
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