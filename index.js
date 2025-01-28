// const express = require('express')
import express from 'express'
import cors from 'cors'
import dataCharacters from './dataCharacters.js';
const app = express()

const serverPort = 4242

const things = [
    { id: 1, name: "Socks" },
    { id: 2, name: "Skills" },
    { id: 3, name: "Passion" },
  ];
  
app.use(cors())
 // http://localhost:4242/
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
//http://localhost:4242/characters
app.get('/characters', (req, res) => {
  res.status(200).json(dataCharacters)
})
//http://localhost:4242/characters/:id
app.get('/characters/:id', (req, res) => {
  const wantedId = req.params.id // verifier si ya pas de < > (regex)
  console.log(wantedId);
  const character = dataCharacters.find((character) => character.id === wantedId )
  res.json(character)
})

//http://localhost:4242//spells
app.get('/spells', (req, res) => {
  res.send('je suis sur la route back /spells')
})

app.listen(serverPort, () => {
  console.info(` l'api est lancer http://localhost:${serverPort}`)
})