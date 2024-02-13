const router= require("express").Router();
const userData= require("./controller/user")
const acadamic = require("./controller/acdamic")
const bank= require("./controller/bank")
const basic=require("./controller/basic")

// const multer = require('multer');
// const {v4:uuidv4} = require("uuid")
// const path = require("path")
// const File = require('../pro/model/file');


router.post("/postUser",userData.postUser)
router.post("/loginUser",userData.loginUser)
router.get("/getAllStu/:roll",userData.getAllStu)

router.post("/acdamicDetails",acadamic.postAcdamic)
router.get("/getAllAcadamic",acadamic.getAllAcadamic)

router.get("/getAllStudent",basic.getAllStuent)
router.get("/getstubyid/:_id",basic.getStubyId)
router.get("/getAllbank",bank.getAllbank)
router.post("/bankdetails",bank.postBank)
router.post("/basicdemo",basic.postbasic)
router.get("/getStates/:state",basic.getStates)


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads');
//     },
//     filename: function (req, file, cb) {
//       cb(null, uuidv4()+"_"+Date.now()+path.extname(file.originalname));
      
//     }
//   });
//   const upload = multer();
// //   const upload1 = multer({ storage: storage });
//   router.post('/api/upload',upload.single('file'), async (req, res) => {
//     try {
//       const newFile = new File({
//         filename: req.file.filename,    
//       });
//       await newFile.save();
//       res.status(201).send('File uploaded successfully',newFile);
//     } catch (err) {
//       res.status(500).send('Server error');
//     }
//   });

module.exports=router