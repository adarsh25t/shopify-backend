import express from 'express';
import { userSignUp } from '../controller/userSignUp.js';
import { userSignIn } from '../controller/userSignIn.js';
import { getUserDetails } from '../controller/userDetails.js';
import { authToken } from '../middleware.js/authToken.js';
import { userlogout } from '../controller/userLogout.js';
import { AllUsers } from '../controller/getAllUsers.js';
import { updateUserDetails } from '../controller/updateUser.js';

const userRoute = express.Router();

userRoute.post('/signup',userSignUp);
userRoute.post('/signin',userSignIn);
userRoute.get('/userdetails',authToken,getUserDetails);
userRoute.get('/logout',userlogout);
userRoute.get('/allusers',authToken,AllUsers);
userRoute.post('/updateuser',authToken,updateUserDetails)

export default userRoute; 