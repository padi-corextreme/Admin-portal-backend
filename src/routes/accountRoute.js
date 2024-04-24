import { Router } from "express";
import { createUser, deleteAccount, getAccount, getAllAccounts, updateAccount } from "../controllers/account_controllers.js";
import {login} from "../controllers/signInController.js"


const router = Router()


router.post('/login', login)

router.get('/account',  getAllAccounts),

router.get('/account/:id', getAccount)

router.patch('/account/:id',  updateAccount )

router.post('/account', createUser)

router.delete('/account/:id', deleteAccount)

export default router