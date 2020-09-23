const express = require('express')
const app = express()
const port = 300

// Settings
app.set('port', process.env.PORT || 300) // Port assignment
app.set('views', __dirname + '/views') // Where are the views to web, with template engine
app.set('view engine', 'pug') // Use the 'pug' template engine

// Routes
app.use(require('./routes'))

// Files Statics
app.use('/static', express.static(__dirname + '/public')) // Where are the public files


// Initialization
app.listen(app.get('port'), () => {
  console.log(`Example app listening at https://localhost:${app.get('port')}`);
})