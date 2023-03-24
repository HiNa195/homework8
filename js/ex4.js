/* Homework 8
   Exercise 4 JavaScript code
   -- FormData Key/Value Pair Values
*/

// Add options to Payment Type using radio button
const paymentDiv = document.getElementById("payment");
const paymentTypes = ["Cash", "Credit Card", "Google Pay", "Apple Pay"];
for (let i = 0; i < paymentTypes.length; i++) {
    const type = paymentTypes[i];
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "payment";
    radio.value = type;
    const label = document.createElement("label");
    label.textContent = type;
    paymentDiv.appendChild(radio);
    paymentDiv.appendChild(label);
    paymentDiv.appendChild(document.createElement("br"));
}

// Add options to Preferred Location using select element
const locationSelect = document.getElementById("location");
const locationOptions = ["Los Angeles", "Orange County", "Riverside", "San Diego"];
for (let i = 0; i < locationOptions.length; i++) {
    const option = document.createElement("option");
    option.text = locationOptions[i];
    locationSelect.add(option);
}

// Add submit event listener to the form
const form = document.getElementById("sampleForm");
form.addEventListener("submit", event => {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(form); // Create FormData object from the form

    // Create table to display key/value pairs
    const table = document.getElementById("formData");
    table.innerHTML = "<tr><th>Key</th><th>Value</th></tr>";

    // Loop through FormData entries and add them to the table
    for (const [key, value] of formData.entries()) {
        const row = table.insertRow();
        const keyCell = row.insertCell();
        keyCell.textContent = key;
        const valueCell = row.insertCell();
        valueCell.textContent = value;
    }
});

// Add click event listener to the cancel button
const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
    form.reset(); // Reset form
    const table = document.getElementById("formData");
    table.innerHTML = ""; // Clear table
});