document.getElementById("yes-btn").addEventListener("click", function() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("gift-container").style.display = "block";
});

document.getElementById("no-btn").addEventListener("click", function() {
  alert("Oh, come on! Give us a chance!");
});

document.getElementById("submit-gift").addEventListener("click", function() {
  const gift = document.getElementById("gift-answer").value;
  document.getElementById("gift-container").style.display = "none";
  document.getElementById("response-container").style.display = "block";
  document.getElementById("gift-response").innerHTML = `Wow, thank you for the ${gift}! You're the best!`;
});
