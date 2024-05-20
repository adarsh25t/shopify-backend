import express from 'express';
import { userSignUp } from '../controller/userSignUp.js';
import { userSignIn } from '../controller/userSignIn.js';
import { getUserDetails } from '../controller/userDetails.js';
import { authToken } from '../middleware.js/authToken.js';
import { userlogout } from '../controller/userLogout.js';
import { AllUsers } from '../controller/getAllUsers.js';
import { updateUserDetails } from '../controller/updateUser.js';
import { addToCart } from '../controller/AddToCart.js';
import { getCartItems } from '../controller/getCartItems.js';
import { decrementItemQuantity, deleteItem, incrementItemQuantity } from '../controller/updateCart.js';

const userRoute = express.Router();

userRoute.post('/signup',userSignUp);
userRoute.post('/signin',userSignIn);
userRoute.get('/userdetails',authToken,getUserDetails);
userRoute.get('/logout',userlogout);
userRoute.get('/allusers',authToken,AllUsers);
userRoute.post('/updateuser',authToken,updateUserDetails)
userRoute.post('/addtocart',authToken,addToCart);
userRoute.get('/usercarts',authToken,getCartItems);
userRoute.post('/incrementcartitem',authToken,incrementItemQuantity);
userRoute.post('/decrementcartitem',authToken,decrementItemQuantity);
userRoute.post('/deletecart',authToken,deleteItem)
export default userRoute; 