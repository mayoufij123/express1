const express = require('express')
const app = express();
const port = 5001;
const date = require('./midellware/Date')


app.get('/getinfo', (req, res) => {
    res.send('Hello World')

})

app.get('/homepage', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
})
app.get('/contactpage', (req, res) => {
    res.sendFile(__dirname + '/public/contactus.html')

})
app.get('/sevicepage', date, (req, res) => {
    res.sendFile(__dirname + '/public/ourservice.html')
})






app.listen(port, (err) => {
    err ? console.log(err) : console.log(`go to the port number ${port}`);
})