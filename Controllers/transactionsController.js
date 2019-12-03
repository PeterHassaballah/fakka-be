
const NodeCouchDb = require('node-couchdb');

const couchAuth = new NodeCouchDb({
    auth:{
        user: 'peter',
        password: 'beamer'
    }
});

const dbName = 'transactions';
const viewUrl = '_design/all_transactions/_view/all' 

exports.getAll = function (req, res) {
    console.log("Getting all transactions data");
    couch.get(dbName, viewUrl, queryOptions).then(({data, headers, status}) => {
      // data is json response
      // headers is an object with all response headers
      // status is statusCode number
      console.log(data);
      // res.json(status);
  }, err => {
      // either request error occured
      console.log('error getting all data',err);
      // ...or err.code=EDOCMISSING if document is missing
      // ...or err.code=EUNKNOWN if statusCode is unexpected
      
      // res.json(status);
  });
  }