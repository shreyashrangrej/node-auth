const User = require('../models/user')
const dbService = require('../util/dbService')
const userTokens = require('../models/userToken')
const dayjs = require('dayjs')


const register = async (req, res, next) => {
    return res.status(200).json({ Messgae: 'Register Route' })
}

const login = async (req, res, next) => {
    return res.status(200).json({ Messgae: 'Login Route' })
}

const forgotPassword = async (req, res, next) => {
    return res.status(200).json({ Message: 'forgotPassword Route' })
}

const validateResetPasswordOtp = async (req, res, next) => {
    return res.status(200).json({ Message: 'valudateResetPasswordOtp Route' })
}

const resetPassword = async (req, res, next) => {
    return res.status(200).json({ Messgae: 'resetPassword Route' })
}

const logout = async (req, res, next) => {
    return res.status(200).json({ Messgae: 'logout Route' })
}

module.exports = { register, login, forgotPassword, validateResetPasswordOtp, resetPassword }