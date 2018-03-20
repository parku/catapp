'use strict'

const express = require('express')
const app = express()
const _ = require('lodash')

const cats = [
    {name: 'Bubbles'},
    {name: 'Cuddles'},
    {name: 'Munchkin'}
];

app.get('/', (req, res) => {
     res.send(cats[_.random(0, cats.length + 1)].name);
})

module.exports = app