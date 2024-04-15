import { Router } from "express";
import {   login  } from "../controllers/signInController.js";



const router = Router();

router.post('/login', login);

// router.get ('/fetchUsers', getUsers);

// router.get ('/fetchUser/:id', getUser);

// router.patch('/updateUser/:id', patchUser );

// router.delete('/removeUser/:id', deleteUser );


export default router