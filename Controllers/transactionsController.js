
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

  // Should take sender (merchant) id, receiver (customer) id, and amount
  // Should also record a timestamp
  exports.sendchange = function (req, res) {
      console.log("Merchant sending an amount.");
      // record in database
  }

  exports.getmytransactions = function (req, res) {
    console.log("Someone getting their transaction history");
    // retrieve from database
  }

  exports.getmylatestreceipt = function (req, res) {
    console.log("Someone querying the latest transaction received");
    // retrieve from database
  }