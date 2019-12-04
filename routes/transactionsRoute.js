var express = require('express');
var router = express.Router();
var transactionController = require('../Controllers/transactionsController');
var transaction = require('../Models/transactionModel')


// router.post("/getAll", transactionController.getAll);

router.post("/sendchange", transactionController.sendchange);
router.post("/mytransactions", transactionController.getmytransactions);
router.post("/mylatestreceipt", transactionController.getmylatestreceipt);

module.exports = router;