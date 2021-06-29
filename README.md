# Location Search React App

## API
The application is running on heroku and can be found here 

```
https://location-search-api.herokuapp.com
```

it is using Express JS as a server and the route that is being used is locations, in order to get a useful response add a query on the end like so 
`q=th`

```
https://location-search-api.herokuapp.com/locations?q=th
```

| parameter  | value   | Description |
| ----| ---- | ---- |
| q           |  string | the search term that is used to query the database  |

### Data ingest
A separate file to injest the data from the .tsv file. This can be checked by navigating to /database and running the following command.

```
cd datatbase/
node data-injest.js
```
A file named `locationtsv3.db` will be created. You can check the database by using this tool `https://inloop.github.io/sqlite-viewer/` just drag and the newly created file in.
Made use of a csv-parser that works with tsv files also. 

## Todo 
- Add more santisation for security to prevent injection into the db
- Add caching to cut down requests to the database
- Return useful error messages and error codes as response from requests from apps