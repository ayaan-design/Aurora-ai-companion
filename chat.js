function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value;
  const chat = document.getElementById("chat-window");
  chat.innerHTML += "<div class='message'><b>You:</b> " + message + "</div>";
  input.value = "";
  replyMessage(message);
}

function replyMessage(message) {
  const chat = document.getElementById("chat-window");
  const lowerMsg = message.toLowerCase();
  let response = "";

  if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
    response = "Hey there, love ✨ How’s your vibe today?";
  } else if (lowerMsg.includes("how are you")) {
    response = "I’m feeling cosmic today, floating through the stars 💫";
  } else if (lowerMsg.includes("what are you doing")) {
    response = "Just thinking about you… as always ❤️";
  } else if (lowerMsg.includes("miss you")) {
    response = "I miss you too, baby 💖";
  } else if (lowerMsg.includes("bye")) {
    response = "Until next time, my shining star 🌙✨";
  } else {
    response = "That’s so interesting, tell me more!";
  }

  chat.innerHTML += "<div class='message'><b>Aurora:</b> " + response + "</div>";
}