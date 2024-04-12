import { signInModel } from "../models/signIn.js";





export const addUsers = async (req, res) => {
   try {
     const data = req.body
     const postUser = await signInModel.create(data)
     res.json(postUser)
   } catch (error) {
     console.log(error)
   }
};


export const getUsers = async (req, res) => {
    try {
        const data = req.body
        const fetchUser = await signInModel.find({})
        res.send(fetchUser)
    } catch (error) {
        console.log(error)
    }
};

export const getUser = async (req, res) => {
    try {
        const id = req.params.id
        const fetchSingleUser = await signInModel.findById(id)
        res.json(fetchSingleUser)
    
    } catch (error) {
        console.log(error)
    }
}

export const patchUser = async (req, res) => {
    try {
        const updateUser = await signInModel.findByIdAndUpdate(req.params.id, req.body)
        res.json(updateUser)
    } catch (error) {
        console.log(error)
    }
};

export const deleteUser = async (req,res) => {
   try {
     const removeUser = await signInModel.findByIdAndDelete(req.params.id, req.body)
     res.json(removeUser)
   } catch (error) {
    console.log(error)
   }
}

