import { Router } from "express";
import { createUser, deleteAccount, getAccount, getAllAccounts, updateAccount } from "./account_controllers.js";

const router = Router()

router.get('/account', getAllAccounts),

router.get('/account/:id', getAccount)

router.patch('/account/:id',  updateAccount )

router.post('/account', createUser)

router.delete('/account/:id', deleteAccount)

export default router