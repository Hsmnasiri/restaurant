const express = require("express");
const router = express.Router();
const HomepageController=require('../Controllers/homepage');


 
router.get('/',HomepageController.Printrestaurants.bind(HomepageController));
router.post('/',HomepageController.Printmenu.bind(HomepageController));

router.use('/order',require('./order'));
router.all('*',(req,res,next)=>{
    res.status(404).json("Page Not Found");
    console.log("error 404! not found");

})

module.exports = router;