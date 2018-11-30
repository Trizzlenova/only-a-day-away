var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios')
var apiKey = require('./weatherKey.js')

var api = apiKey.WEATHER_API_KEY

// Kelvins to Fahrenheit
function kelvToFahr(kelv) {
  return `${Math.floor((kelv - 273.15) * (9/5) + 32)}`;
}

let html = 'https://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&appid=' + api


console.log(html)
axios.get(html)
  .then(function (response) {
      console.log(response.data.main.temp);
    })
    .catch(function (error) {
      console.log(error);
    });
