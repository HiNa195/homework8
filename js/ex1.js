/* Homework 8
   Exercise 1 JavaScript code
   -- Famous Paintings
*/

// Fetch the JSON data
fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
.then(response => response.json())
.then(paintings => {
    const tableBody = document.createElement("tbody");
    // Loop over the paintings array and create a new row for each painting
    paintings.forEach(painting => {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell();
        const yearCell = row.insertCell();
        const artistCell = row.insertCell();
        nameCell.textContent = painting.name;
        yearCell.textContent = painting.year;
        artistCell.textContent = painting.artist;
    });
    // Add the populated tbody to the table
    document.getElementById("paintings").appendChild(tableBody);
})
.catch(error => console.error(error));