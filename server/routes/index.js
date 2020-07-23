const express = require("express");
const router = express.Router();
const { getAllTransActions , createTransAction  } = require("./../http/controllers/transActionController");
const { login , logout  } = require("./../http/controllers/authController");
const { authMiddleWare } = require("./../http/middlewares/index") ;

router.use(require('./public')) ;
router.use(authMiddleWare , require('./private')) ;

module.exports = router;
