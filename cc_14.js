// Task 2: Adding Support Tickets Dynamically

const ticketContainer = document.getElementById("ticketContainer");

// Creates a div and assigns it a name, issue, priority, and creates a resolve button, then appends it to ticketContainer
function createTicket(name, issue, priority) {
    const newTicket = document.createElement("div");
    newTicket.setAttribute("class", "supportTicket"); // setting the class to supportTicket

  // Declaring variables based on parameters and appending them to newTicket
    const customerName = document.createElement("h3");
    customerName.textContent = `Customer Name: ${name}`;
    newTicket.appendChild(customerName);

    const issueDsc = document.createElement("p");
    issueDsc.textContent = `Issue Description: ${issue}`;
    newTicket.appendChild(issueDsc);

    const priorityLevel = document.createElement("label");
    priorityLevel.textContent = `Priority Level: ${priority}`;
    newTicket.appendChild(priorityLevel);

    const blank = document.createElement("div");
        newTicket.appendChild(blank); // white space

    const resolveButton = document.createElement("button"); 
    resolveButton.textContent = "Resolve";

// (Task 4) When clicking the resolve button we remove newTicket from container
    resolveButton.addEventListener("click", function(click) {
        click.stopPropagation();
        ticketContainer.removeChild(newTicket);
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

// (TASK 5)
    editButton.addEventListener("click", function(edit) {
        edit.stopPropagation();

// Creating Input Fields
        const inputField = document.createElement("input");
        inputField.value = customerName.textContent;
        newTicket.appendChild(inputField);

        const inputField2 = document.createElement("input");
        inputField2.value = issueDsc.textContent;
        newTicket.appendChild(inputField2);

        const inputField3 = document.createElement("input");
        inputField3.value = priorityLevel.textContent;
        newTicket.appendChild(inputField3);

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";

// On clicking save we set text content to the input field values, and delete any trace of the input field or save button
        saveButton.addEventListener("click", function(save) {
            save.stopPropagation();
            customerName.textContent = inputField.value;
            issueDsc.textContent = inputField2.value;
            priorityLevel.textContent = inputField3.value;

            newTicket.removeChild(saveButton);
            newTicket.removeChild(inputField);
            newTicket.removeChild(inputField2);
            newTicket.removeChild(inputField3);
    })
    newTicket.appendChild(saveButton);
})

// Adding the button to newTicket
    newTicket.appendChild(resolveButton);
// Adding the edit button to newTicket
    newTicket.appendChild(editButton);
// Adding new ticket to the ticketContainer div
    ticketContainer.appendChild(newTicket); 
};

createTicket("Casey", "Bad at coding", "High");
createTicket("Albert", "Wants refund", "Medium");
createTicket("Elise", "Issue with product", "Low");

// Task 3: Converting NodeLists to Arrays for Bulk Updates

// Selecting all items with the supportTicket class and turning them into an array
const ticketSelector = document.querySelectorAll(".supportTicket");
const ticketSelectorArray = Array.from(ticketSelector);

// Selecting each individual ticket, and applying basic styles and styles based on the priority 
ticketSelectorArray.forEach((ticket) => {

    ticket.style.padding = `10px`;
    ticket.style.margin = '10px';
    ticket.style.borderRadius = '5px';
    ticket.style.display ='inline-block';

// For the current ticket we are selecting the text inside the label tag to perform if statements
    const ticketPriority = ticket.querySelector("label").textContent;

    if (ticketPriority.includes("High")) {
    ticket.style.backgroundColor = 'red';
    }
    else {
        ticket.style.backgroundColor = 'lightblue'; // if its not high priority, the color will be blue
    }
});

// Task 4:

ticketContainer.addEventListener("click", function() {
    console.log("Ticket Clicked");
});