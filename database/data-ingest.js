const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('locationtsv3.db');
const csvParser = require('csv-parser');
const fs = require('fs');

db.exec( `CREATE TABLE IF NOT EXISTS location (
  geonameid,
  name,
  asciiname,
  alternatenames,
  latitude,
  longitude,
  feature_class,
  feature_code,
  country_code);`);

const insrow = db.prepare( `insert into location (
    geonameid,
    name,
    asciiname,
    alternatenames,
    latitude,
    longitude,
    feature_class,
    feature_code,
    country_code ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)` );

fs.createReadStream('GB.tsv')
  .pipe(csvParser({"separator":"\t"}))
  .on('data', (row) => {
    
    insrow.run( 
      row.geonameid,
      row.name,
      row.asciiname,
      row.alternatenames,
      row.latitude,
      row.longitude,
      row.feature_class,
      row.feature_code,
      row.country_code
     );
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    insrow.finalize();
    db.close();
  });
   