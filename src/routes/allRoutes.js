import { Router } from "express";
import { addUsers, deleteUser, getUser, getUsers, patchUser } from "../controllers/signInController.js";


const router = Router();

router.post('/addUser', addUsers);

router.get ('/fetchUsers', getUsers);

router.get ('/fetchUser/:id', getUser);

router.patch('/updateUser/:id', patchUser );

router.delete('/removeUser/:id', deleteUser );


export default router