
const NodeCouchDb = require('node-couchdb');
const couchAuth = new NodeCouchDb({
    auth:{
        user: 'peter',
        password: 'beamer'
    }
});


const dbName = 'customers';
const viewUrl = '_design/all_customers/_view/consumers' 

exports.addUser = function (req, res) {
  //req.body.password is username
  //phonenumber is the password (phone number)
  console.log("Request");
  console.log(req.body);
  console.log("Password");
  console.log(req.body.object.password);

  var obj = req.body.object
  couchAuth.insert(dbName, {
    _id: obj.id,
    field: ["sample", "data", true]
}).then(({data, headers, status}) => {
    console.log(data);
    // data is json response
    // headers is an object with all response headers
    // status is statusCode number
    
    // res.json(status);
    
}, err => {
    console.log("error registering user",err);
    // either request error occured
    // ...or err.code=EDOCCONFLICT if document with the same id already exists
    
    // res.json(status);
});

}


exports.getData = function (req, res) {
  console.log("Getting all user data");
  couch.get(dbName, viewUrl, queryOptions).then(({data, headers, status}) => {
    // data is json response
    // headers is an object with all response headers
    // status is statusCode number
    console.log(data);
    // res.json(status);
}, err => {
    // either request error occured
    console.log('error getting data',err);
    // ...or err.code=EDOCMISSING if document is missing
    // ...or err.code=EUNKNOWN if statusCode is unexpected
    
    // res.json(status);
});
}