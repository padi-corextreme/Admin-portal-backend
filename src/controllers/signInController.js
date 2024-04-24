
import { accountModel } from "../models/account.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import bcrypt from "bcrypt"


dotenv.config()





export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
           //find a user by their email
           const user = await accountModel.findOne({email: email});
        console.log({user})
           //if user email is found, compare password with bcrypt
           if (user) {
             const isSame = await bcrypt.compare(password, user.password);
        
             //if password is the same
              //generate token with the user's id and the secretKey in the env file
        
             if (isSame) {
               let token = jwt.sign({ id: user.id }, process.env.secretKey, {
                 expiresIn: 1 * 24 * 60 * 60 * 1000,
               });
        
               //if password matches wit the one in the database
               //go ahead and generate a cookie for the user
               res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
               console.log("user", JSON.stringify(user, null, 2));
               console.log(token);
               //send user data
               return res.status(201).send(user);
             } else {
               return res.status(401).send("Authentication failed");
             }
           } else {
             return res.status(401).send("Authentication failed");
           }
         } catch (error) {
           console.log(error);
         }
};


// export const getUsers = async (req, res) => {
//     try {
//         const data = req.body
//         const fetchUser = await signInModel.find({})
//         res.send(fetchUser)
//     } catch (error) {
//         console.log(error)
//     }
// };

// export const getUser = async (req, res) => {
//     try {
//         const id = req.params.id
//         const fetchSingleUser = await signInModel.findById(id)
//         res.json(fetchSingleUser)
    
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const patchUser = async (req, res) => {
//     try {
//         const updateUser = await signInModel.findByIdAndUpdate(req.params.id, req.body)
//         res.json(updateUser)
//     } catch (error) {
//         console.log(error)
//     }
// };

// export const deleteUser = async (req,res) => {
//    try {
//      const removeUser = await signInModel.findByIdAndDelete(req.params.id, req.body)
//      res.json(removeUser)
//    } catch (error) {
//     console.log(error)
//    }
// }

