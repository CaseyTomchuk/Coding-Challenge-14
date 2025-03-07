// Task 2: Adding Support Tickets Dynamically

const ticketContainer = document.getElementById("ticketContainer");

// Creates a div and assigns it a name, issue, priority, and creates a resolve button, then appends it to ticketContainer
function createTicket(name, issue, priority) {
    const newTicket = document.createElement("div");
    newTicket.setAttribute("class", "supportTicket"); // setting the class to supportTicket

    newTicket.innerHTML = 
    `<h3>Customer Name: ${name}</h3>
    <p> Issue Description: ${issue}</p>
    <label> Priority Level: ${priority} </label>`;

// done this way so I don't have to use querySelector and initalize a new variable when writing the removeChild function
    const resolveButton = document.createElement("button"); 
    resolveButton.textContent = "Resolve";

// Adding the button to newTicket
    newTicket.appendChild(resolveButton);
// Adding new ticket to the ticketContainer div
    ticketContainer.appendChild(newTicket); 
};

createTicket("Casey", "Bad at coding", "High");
createTicket("Albert", "Wants refund", "Medium");
createTicket("Elise", "Issue with product", "Low");