const router= require("express").Router();
const userData= require("./controller/user")
const acadamic = require("./controller/acdamic")
const bank= require("./controller/bank")
const basic=require("./controller/basic")

router.post("/postUser",userData.postUser)
router.post("/loginUser",userData.loginUser)
router.get("/getAllStu/:roll",userData.getAllStu)

router.post("/acdamicDetails",acadamic.postAcdamic)
router.get("/getAllAcadamic",acadamic.getAllAcadamic)
router.get("/getAllStudent",basic.getAllStuent)
router.post("/bankdetails",bank.postBank)
router.post("/basicdemo",basic.postbasic)

module.exports=router