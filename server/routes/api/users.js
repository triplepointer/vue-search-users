const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}))

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

// Get User
router.post('/', async (req, res) => {
    const users = await loadUsersCollection();
    var query = {};

    if (req.body.name) {
        query.name = req.body.name;
    }

    if (req.body.email) {
        query.email = req.body.email;
    }

    if (req.body.phone) {
        query.phone = req.body.phone;
    }

    if(req.body._id) {
        query._id = ObjectId(req.body._id);
    }

    if(isEmpty(req.body)) {
        res.status(400).send('You need to specify one or more of the following parameters: user name, user phone number or user email.');
    }

    res.send(await users.find(query).toArray());
});

async function loadUsersCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb://localhost:27017/admin', {
            useNewUrlParser: true
        }
    )

    return client.db('admin').collection('users');
}

module.exports = router;