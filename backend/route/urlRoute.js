const express = require('express');
const { getAllUrl, getShortUrl, getUrlById } = require('../controller/urlController');

const router = express.Router();

router.get('/all', getAllUrl);
router.get('/:urlId', getUrlById);
router.post('/short', getShortUrl);

module.exports = router;
