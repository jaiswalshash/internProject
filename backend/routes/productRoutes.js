const express = require('express');
const router = express.Router();
const {getAllProducts, getProductById} = require("../controller/productController");
const Users = require("../models/accountModel.js");

router.get('/products', getAllProducts);

router.get('/product/:id', getProductById);

router.post("/signUp", async (req, res) => {

  const {email} = req.body.email;  

  Users.findOne({email: email}, (error, user) => {
    if (user) {
      res.send({message: "This E-Mail Id already exists!"});
    } else {
      Users.create(req.body)
        .then((data) => {
          res.send({message: "Successfully Registered, Sign In to visit your profile"});
        })
        .catch((err) => {
          console.log("err");
          res.send({ message: "Error occurred"});
        });
    }
  });
})
.post("/signIn", (req, res) => {
    const {email, password} = req.body;
    Users.findOne({email: email}, (err, user) => {
        if(user){
            if(password === user.password){
                res.send({
                    message: "Login Successful",
                    user: user
                })
            }else{
                res.send({message: "Enter correct password"})
            }
        }else{
            res.send({message: "Email Id not registered"})
        }
    });
  })
  .get("/signUp", (req, res) => {
    res.send("recieved");
  });

module.exports = router;
