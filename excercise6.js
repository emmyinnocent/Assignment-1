let score = Number(prompt("Enter your score (0 - 100)"));

if (score >= 70 && score <= 100) {
  alert("Excellent");
} else if (score >= 50 && score < 70) {
  alert("Good");
} else if (scoret >= 0 && score < 50) {
  alert("Need improvement");
} else {
  alert("Invalid score");
}
