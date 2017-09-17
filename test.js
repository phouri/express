var express = require('./index.js');
express.request.foo = function () { return 'bar';};
var app = express();

app.get('/tobi', function (req, res, next) {
  res.send('tobi');
});

app.listen(3333);
