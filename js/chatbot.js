const header = document.getElementById('chatbot-header');
const body = document.getElementById('chatbot-body');
const messages = document.getElementById('chatbot-messages');
const input = document.getElementById('chatbot-input');

// Toggle chatbot visibility
header.addEventListener('click', () => {
  body.style.display = body.style.display === 'flex' ? 'none' : 'flex';
});

// Handle user input
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const userMsg = input.value.trim();
    if (!userMsg) return;

    addMessage('You', userMsg);
    respond(userMsg.toLowerCase());
    input.value = '';
  }
});

// Display message in chat
function addMessage(sender, text) {
  const msg = document.createElement('div');
  msg.textContent = `${sender}: ${text}`;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

// Respond with predefined answers or fallback
function respond(msg) {
  const responses = {
    "hi": "Hello! How can I help you today?",
    "hello": "Hi there! Need help with a product?",
    "what are your hours?": "We’re open 9am – 5pm, Monday through Friday.",
    "do you offer shipping?": "Yes! We ship worldwide 🌍📦",
    "how do i track my order?": "You can log into your account and view your orders on the dashboard.",
    "where are you located?": "We're based online but love the outdoors. We ship from various distribution centers!"
  };

  const matched = Object.keys(responses).find(q => msg.includes(q));
  const reply = matched ? responses[matched] : "I'm not sure about that. Please contact our support team!";

  setTimeout(() => addMessage("Bot", reply), 600);
}
