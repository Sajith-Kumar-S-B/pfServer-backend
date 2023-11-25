const projects = require("../Model/projectSchema")



// add projects



exports.addProjects = async (req,res)=>{
    console.log("inside Add project function");
    const userId = req.payload
    const projectImage = req.file.filename
    const {title,languages,overview,gitHub,website}= req.body
    // console.log(`${title},${languages},${overview},${gitHub},${website}, ${userId}`);

    try{
        const existingProject = await projects.findOne({gitHub})
        if(existingProject){
            res.status(406).json("Projects already exist !! Upload another")
        }else{
            const newProject = new projects({
                title,languages,overview,gitHub,website,projectImage,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }catch(err){
        res.status(401).json(`Request failed, Error:${err}`)
    }
}



// get userprojects  - token required

exports.allUserProjects = async (req,res)=>{
    const userId = req.payload

    try{
       const userProjects = await projects.find({userId})
       res.status(200).json(userProjects)
    }catch(err){
        res.status(401).json(err)
    }
}


// get allprojects  - token required

exports.getallProjects = async (req,res)=>{
    const searchkey = req.query.search

    const query = {
        languages:{$regex:searchkey,$options:"i"}
    }
    const userId = req.payload

    try{
       const allProjects = await projects.find(query)
       res.status(200).json(allProjects)
    }catch(err){
        res.status(401).json(err)
    }
}


// get home projects 

exports.getHomeProjects = async (req,res)=>{

    try{
       const homeProjects = await projects.find().limit(3)
       res.status(200).json(homeProjects)
    }catch(err){
        res.status(401).json(err)
    }
}




exports.editProjectController = async(req,res)=>{
    // get edit project details

    const {id} = req.params
    const userId = req.payload
    const {title,languages, overview,gitHub,website,projectImage} = req.body


    const uploadProjectImage = req.file?req.file.filename:projectImage

    try{
        const updateProject = await projects.findByIdAndUpdate({_id:id},{
            title,languages,overview,gitHub,website,projectImage:uploadProjectImage,userId    
        },{new:true})
        await updateProject.save()

    }catch(err){
        res.status(401).json(err)
    }
}