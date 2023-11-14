
const users = require('../Model/userSchema')

exports.register = async(req,res)=>{
    console.log('Inside Register Controller Function');

    const {username,email,password} = req.body


    try{
        const existingUser = await users.findOne({email})

        if(existingUser){
            res.status(406).json("Account Already Exists")

        }else{
            const newUser = new users({
                username,email,password,github:'',linkedin:'',profile:'',
            })

            await newUser.save()
            res.status(200).json(newUser)

        }
    }
    catch(err){
        res.status(401).json(`Register API  Failed Error : ${err}` )
    }
}


exports.login = async(req,res)=>{

    console.log('Inside Login Controller Function');

    const {email,password} = req.body

    try{

       const registeredUser = await users.findOne({email,password})

       if(registeredUser){


        res.status(200).json("Login Success")
   
       }else{
         res.status(406).json("Invalid Email or Password")

       }

    } catch(err){
        res.status(401).json(`Login API  Failed Error : ${err}` )
    }

}
