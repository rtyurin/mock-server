const express = require('express');
const bodyParser = require('body-parser');
const users = require('./mock.json')
const cors = require('cors');

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.options('*', cors())

app.get('/users', (req, res) => {
    const result = users.items.filter(user => user.name.match(req.query.search))
    res.set('Content-Type', 'application/json')
    return res.json(result)
})

app.listen(3000, () => {
  console.log('Our app is listening for request on port 3000');
});