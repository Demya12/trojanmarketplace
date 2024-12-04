// Handle the form submission on login.html
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing when submitting the form
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {

        localStorage.setItem('username', username);

        window.location.href = 'welcome.html';
    }
});
// Mock data to simulate messages from the server
let messages = [
    { sender: "Seller", content: "Hello, are you interested in this item?" },
    { sender: "Buyer", content: "Yes, I am! How much is it?" }
];

// Display messages function
function displayMessages() {
    const messageList = document.getElementById('message-list');
    messageList.innerHTML = '';  // Clear previous messages
    messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = `${msg.sender}: ${msg.content}`;
        messageList.appendChild(messageDiv);
    });
}

// Handle form submission
document.getElementById('message-form').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent page reload on form submit
    
    const messageInput = document.getElementById('message-input');
    const newMessage = messageInput.value;
    
    if (newMessage.trim() !== '') {
        // Simulate sending the message to the server
        messages.push({ sender: "Buyer", content: newMessage });
        messageInput.value = '';  // Clear input field
        displayMessages();  // Update the message list
    }
});

// Initial display of messages
displayMessages();

