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

// (Task 4) When clicking the resolve button we remove newTicket from container
    resolveButton.addEventListener("click", function(click) {
        click.stopPropagation();
        ticketContainer.removeChild(newTicket);
    });

// Adding the button to newTicket
    newTicket.appendChild(resolveButton);
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

ticketContainer.addEventListener("click", function(click) {
    console.log("Ticket Clicked");
});