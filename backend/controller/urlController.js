const shortId = require('shortid');
const Url = require('../model/Url');
const validateUrl = require('../utils/validateUrl');

const getAllUrl = async (req, res) => {
    Url.find((error, data) => {
        if (error) return next(error);
        if (data.length === 0) return res.json({ isSuccess: false, message: `No url found!` });
        res.json({ isSuccess: true, total: data.length, urls: data });
    });
};

const getUrlById = async (req, res) => {
    try {
        const url = await Url.findOne({ urlId: req.params.urlId });
        if (url) {
            url.clicks++;
            url.save();
            return res.redirect(url.originalUrl);
        } else {
            res.status(404).json({ isSuccess: false, message: `No url found with this urlId - ${req.params.urlId}!` });
        }
    } catch (err) {
        res.status(500).json({ isSuccess: false, message: `Server error - ${err}!` });
    }
};

const getShortUrl = async (req, res) => {
    const { originalUrl } = req.body;
    const urlId = shortId.generate();
    if (validateUrl(originalUrl)) {
        try {
            let url = await Url.findOne({ originalUrl });
            if (url) {
                res.json(url);
            } else {
                const shortUrl = `${req.protocol}://${req.headers.host}${req.baseUrl}/${urlId}`;
                url = new Url({
                    originalUrl,
                    shortUrl,
                    urlId
                });
                await url.save();
                res.json({ isSuccess: true, url });
            }
        } catch (err) {
            res.status(500).json({ isSuccess: false, message: `Server error - ${err}!` });
        }
    } else {
        res.status(400).json({ isSuccess: false, message: 'Invalid original url!' });
    }
};

module.exports = { getAllUrl, getUrlById, getShortUrl };
