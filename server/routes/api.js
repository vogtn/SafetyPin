const express = require('express');
const request = require('request');

const router = new express.Router();





router.get('/dashboard', (req, res) => {


request('https://data.seattle.gov/resource/y7pv-r3kh.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
    res.json({message:body})
  }
})





});






module.exports = router;