const { db } = require('./database/db-connent');

const getResultFromDb = searchTerm => new Promise((resolve, reject) => {
  const sqlRetrieveByTerm = `SELECT * FROM location
  WHERE name LIKE '${searchTerm}%';`;
    
  db.all(sqlRetrieveByTerm, (err, row) => {
    if (err) {
      reject(err);
    } else {
      resolve(row);
    }
  })
});

const retrieveResults = async (searchTerm) => {
  const result = await getResultFromDb(searchTerm);

  const locationData = result.reduce((acc, location) => 
  ([...acc, location.name]), []);
  
  // return an object if needed
  // const locationData = result.reduce((acc, location) => 
  // ({ ...acc, [location.geonameid] : location.name }), {});

  return locationData;
}

module.exports = {
  retrieveResults
};





