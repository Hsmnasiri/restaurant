const express =require('express');
const router =express.Router();
const SubmitorderController=require('../Controllers/submitorder');


router.post('/print',SubmitorderController.printOrder.bind(SubmitorderController));
router.post('/submit',SubmitorderController.makeorder.bind(SubmitorderController));

router.put('/',SubmitorderController.editorder.bind(SubmitorderController));
router.delete('/',SubmitorderController.deleteorder.bind(SubmitorderController));

module.exports =router;