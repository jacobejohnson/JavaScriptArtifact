/*
 Jacob Johnson
 Simple JavaScript program the uses a random number generator
 to print to console a recommended vacation destination based on 
 a list of the top ten tourist destinations of 2017
*/

var destination = ['Bangkok, Thailand', 'London, UK', 'Paris, France', 'Dubai, UAE', 'Singapore ', 'Tokyo, Japan', 
  'Seoul, South Korea', 'New York, USA', 'Kuala Lumpur, Malaysia', 'Hong Kong'];
var randomCity = Math.floor(Math.random() * 10);
console.log('You should visit ' + destination[randomCity] + '!');