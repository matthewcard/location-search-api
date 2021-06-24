var express = require('express');
var router = express.Router();
const { getResultsByQueryTerm } = require('../sendRequest');

router.get('/', async function(req, res, next) {
    const queryValue = req?.query?.q || '';
    const response = await getResultsByQueryTerm(queryValue.trim());
    const resJson = JSON.stringify(response);

    res.send(resJson);
});

module.exports = router;
