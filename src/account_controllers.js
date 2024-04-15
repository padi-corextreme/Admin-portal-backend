
import bcrypt from 'bcrypt'
import { accountModel } from "./account.js"


async function hashPassword(password) {
    const res = await bcrypt.hash(password, 10)
    return res
}

async function compare(userPassword, hashedPassword) {
    const res = await bcrypt.compare(userPassword, hashedPassword)
    return res
}



// creating account controllers
export const createUser = async (req, res, next) => {
    try {
        const data = req.body
        // Hash plain password
        const hashedPassword = await hashPassword(req.body.password)
        const { firstName, email, lastName, country, companyName } = await accountModel.create({
            ...data,
            password: hashedPassword
        })
        res.status(201).json({
            firstName,
            email,
            lastName,
            country, 
            companyName
        })
    } catch (error) {

        // the next will handle the express error
        next(error)
        res.status(500).send({ error });
    }
}

export const getAllAccounts = async (req, res, next) => {
    try {
        const findAccount = await accountModel.find()
        res.json(findAccount)
    } catch (error) {
        next(error)
    }
}

export const getAccount = async (req, res, next) => {
    try {
        const findAccount = await accountModel.findById(req.params.id)
        if (findAccount === null) {
            return res.status(404).json({ message: `Account with id ${findAccount} not found` })
        } else {
            res.json(findAccount)
        }
    } catch (error) {
        next(error)
    }
}

export const updateAccount = async (req, res, next) => {
    try {
        const accountUpdate = await accountModel.findByIdAndUpdate(req.params.id)
        res.json({ message: `Your account with id ${accountUpdate} has been updated` })
    } catch (error) {

    }
}

export const deleteAccount = async (req, res, next) => {
    try {

        const id = req.params.id
        const accountDelete = await accountModel.findByIdAndDelete(id)
        res.status(201).json({ message: `Your account with ${accountDelete} has been deleted successfully` })
    } catch (error) {
        next(error)
    }
}