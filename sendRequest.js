const { retrieveResults } = require('./retrieve-results');

const getResultsByQueryTerm = async (queryValue) => 
( await retrieveResults(queryValue) );

module.exports = {
    getResultsByQueryTerm
};
