/* Homework 6
   Exercise 3 JavaScript code
   -- Visited Countries
*/

// Create an array containing three objects
const traveler = {
    name: "Khanh Linh",
    countries: [
        {
            name: "Canada",
            year: 2016
        },
        {
            name: "France",
            year: 2018
        },
        {
            name: "USA",
            year: 2020
        }
    ]
};

const url = "https://thejsway-server.herokuapp.com/api/countries";
// Send this array as JSON data to the server
fetch(url, {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(traveler)
})
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.error(error.message));