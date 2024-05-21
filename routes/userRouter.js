const express = require('express')
// Importing controllers and middleware using require
const userSignUp = require('../controller/userSignUp');
const userSignIn = require('../controller/userSignIn');
const getUserDetails = require('../controller/userDetails');

const userLogout = require('../controller/userLogout');
const AllUsers = require('../controller/getAllUsers');
const updateUserDetails = require('../controller/updateUser');
const addToCart = require('../controller/AddToCart');
const getCartItems = require('../controller/getCartItems');
const { decrementItemQuantity, deleteItem, incrementItemQuantity } = require('../controller/updateCart');
const authToken = require('../middleware.js/authToken');
const userlogout = require('../controller/userLogout');

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

module.exports = userRoute; 