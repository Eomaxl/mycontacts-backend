const asyncHandler = require("express-async-handler");
//@desc Register an user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req,res) => {
    res.json({message: "Register the user"});
});

//@desc Login an user
//@route POST /api/user/login
//@access public
const loginUser = asyncHandler(async (req,res) => {
    res.json({message: "Login an user"});
});

//@desc Current user information
//@route GET /api/user/current
//@access public
const currentUser = asyncHandler(async(req,res) =>{
    res.json({message: "Get current user information"});
});


module.exports = {registerUser, loginUser, currentUser};
