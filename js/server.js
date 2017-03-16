const express = require('express');
const app = express();

const PORT = 3000;
app.listen(PORT);

app.use(express.static('./'));

app.get('/', function(request, response) {
  response.sendFile('/index.html', {root: './'});
});

// How to use information in the URL string to initialize my one page app to a different screen? Maybe there's a way to read the browser object and analyze the url entered, while telling the server to ignore that extra information. Or... Perhaps a less direct way would be to have the server respond with an appropriate JSON string which maps directly to the variables in question on the front-end. Which is appropriate?