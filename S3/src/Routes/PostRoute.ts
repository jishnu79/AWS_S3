import { post } from "../Collections/UserCollection";
const express = require('express')

const router = express.Router()
router.post('/post',post)

module.exports = router; 