const shortId = require('shortid');
const Url = require('../model/Url');
const validateUrl = require('../utils/validateUrl');

const getAllUrl = async (req, res) => {
    Url.find((error, data) => {
        if (error) return next(error);
        res.json(data);
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
            res.status(404).json('Not found');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
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
                res.json(url);
            }
        } catch (err) {
            console.log(err);
            res.status(500).json('Server Error');
        }
    } else {
        res.status(400).json('Invalid Original Url');
    }
};

module.exports = { getAllUrl, getUrlById, getShortUrl };