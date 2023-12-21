'use strict';
const app = require("./api/index.js");

const port = process.env.PORT || 3000;


app.listen(port, function () {
  console.log('Server started on port', port);
});
