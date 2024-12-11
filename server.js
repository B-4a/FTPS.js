`use strict`
//frontend javascript to display the image object json string into a browser
    const URL = ""https://github.com/B-4a/b-4a1

   fetch( URL )

      .then(function(response) {
         console.log(response);
        return response.json();
   })

      .then(function(data){
  
         console.log(data);
        
   })
  //for each loop to go through all the elements in the json string
       
        data.forEach(function(image){
        
        someHTML = someHTML +``;  
        someHTML += `
        <img src='${image.fileName}' alt='my image'>
        <a href="${image.attribution.url}">Some Text</a>`;
//template variables to get the images to index.html file which is hoisting
   });
        document.querySelector('#table').innerHTML = someHTML; 
const path = require('path');
const express = require('express');
const app = express();
const newArray = require('./data/gallery');
const { response } = require('express');
const router = express.Router()

//declare variables
app.use(express.static(path.join(__dirname,'./public')));
//use middle-ware to join with ./public
app.use(function(request, response) {
  response.send(newArray);
  //send the array to respond with json lateron
})

app.get('/',(req, res) => {
 res.json({newArray});
})

//stringify method to convert the array to json string
jsonArrData = JSON.stringify(newArray)

console.log(jsonArrData)

console.log(typeof jsonArrData === 'string')


   
console.log(require);
console.log(response);

app.use(function(req,res){
  res.status(404).end();
  response.send('custom-404')
})

//send to localhost:3000 because every app does a GET request at a beginning of every session 

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${https://github.com/B-4a/b-4a1}`);
});
