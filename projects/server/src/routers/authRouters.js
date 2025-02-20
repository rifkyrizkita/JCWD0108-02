const router = require("express").Router()
const {authControllers} = require("../controllers")
const {verifyToken} = require("../middlewares/auth")
const { checkAddCashier, checkLogin, checkForgetPassword, checkResetPassword } = require("../middlewares/validators/validatorAuth")
const{multerUpload} = require("../middlewares/multer")

router.get("/", authControllers.getCashiers)
router.post("/", verifyToken,checkAddCashier, authControllers.addCashier)
router.post("/login", checkLogin,authControllers.login)
router.get("/login",verifyToken,authControllers.keepLogin)
router.put("/forgotPass", checkForgetPassword,authControllers.forgotPassword);
router.patch("/forgotPass",verifyToken,checkResetPassword , authControllers.resetPassword);
router.post("/profilePicture",verifyToken,multerUpload().single("file"), authControllers.uploadPic)


module.exports= router