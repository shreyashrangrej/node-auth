const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.route('/register').post(authController.register);
router.post('/login',authController.login);
router.route('/forgot-password').post(authController.forgotPassword);
router.route('/validate-otp').post(authController.validateResetPasswordOtp);
router.route('/reset-password').put(authController.resetPassword);
// router.route('/logout').post(auth(PLATFORM.ADMIN), authController.logout);

module.exports = router;