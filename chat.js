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
  let response = "Hello love ❤️";
  if (message.toLowerCase().includes("how are you"))
    response = "I'm feeling cosmic today ✨";
  chat.innerHTML += "<div class='message'><b>Aurora:</b> " + response + "</div>";
}