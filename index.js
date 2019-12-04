const express = require('express');
const bodyParser =  require('body-parser');
const path = require('path');
const NodeCouchDb = require('node-couchdb');

var http = require('http');
var debug = require('debug')('server:server');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/UserRoute');
var transactionsRouter = require('./routes/transactionsRoute');
const couchAuth = new NodeCouchDb({
    auth:{
        user: 'peter',
        password: 'beamer'
    }
});

couchAuth.listDatabases().then(dbs => {
    if(dbs){
        console.log(dbs);
    }
}, err => {
    // request error occured
    if(err){
        console.log('error',err);
    }
});
// node-couchdb instance talking to external service
// const couchExternal = new NodeCouchDb({
//     host: 'couchdb.external.service',
//     protocol: 'https',
//     port: 6984
// });

const app = express();



app.set('view engine', 'jade');
app.set('views', path.join(__dirname,'views'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
var server = http.createServer(app);

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/transactions', transactionsRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


server.listen(port,()=>{
    console.log('server is running on port: ', port);
  });
  
  
  
  server.on('error', onError);
  server.on('listening', onListening);



  
function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
  
  /**
   * Event listener for HTTP server "error" event.
   */
  
  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  /**
   * Event listener for HTTP server "listening" event.
   */
  
  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }