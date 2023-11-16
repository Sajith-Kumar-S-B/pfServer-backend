const projects = require("../Model/projectSchema")



// add projects



exports.addProjects = (req,res)=>{
    console.log("inside Add project function");
    const userId = req.payload
    console.log(`${userId}`);
    res.status(200).json("addProjects request received !!")
}