import express from 'express'
// const express = require('express')
import dataCharacters from './dataCharacters';
const app = express()

const serverPort = 4242

const things = [
    { id: 1, name: "Socks" },
    { id: 2, name: "Skills" },
    { id: 3, name: "Passion" },
  ];
  
app.get('/', (req, res) => {
  res.send('je suis sur la route back /')
})

// http://localhost:4242/things
app.get('/things', (req, res) => {
  //demander les info a la bdb
  res.json(things)
})

//http://localhost:4242/things/2
app.get('/things/:id', (req, res) => {
  const wantedId = parseInt(req.params.id)
  console.log(wantedId);
  const thing = things.find((thing) => thing.id === wantedId )
  res.json(thing)
})

app.get('/characters', (req, res) => {
  res.json(dataCharacters)
})

app.get('/spells', (req, res) => {
  res.send('je suis sur la route back /spells')
})

app.listen(serverPort, () => {
  console.info(` l'api est lancer http://localhost:${serverPort}`)
})