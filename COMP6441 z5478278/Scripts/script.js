document.getElementById('submitRegBtn')?.addEventListener('click', function() {
  const username = document.getElementById('regUsername').value;
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  alert("Registration successful! Redirecting to login...");
  window.location.href = "login.html";
});

document.getElementById('submitLoginBtn')?.addEventListener('click', function() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
    window.location.href = "../Cybersecurity_Certification.html";
  } else {
    alert("Invalid login credentials!");
  }
});

function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (isLoggedIn === "true") {
    window.location.href = "account.html";
  } else {
    window.location.href = "register.html";
  }
}

function updateAuthButton() {
  const authButton = document.getElementById("authButton");
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  
  authButton.innerHTML = isLoggedIn
    ? '<a href="#" onclick="logout()">Logout</a>'
    : '<a href="login.html">Login</a>';
}

function logout() {
  localStorage.setItem("loggedIn", "false");
  updateAuthButton();
  const modal = document.createElement("div");
  modal.id = "logoutModal";
  modal.style.cssText = `
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
  `;
  const modalContent = document.createElement("div");
  modalContent.style.cssText = `
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    max-width: 400px;
    text-align: center;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    animation: fadeIn 0.3s ease-in-out;
  `;
  const title = document.createElement("h2");
  title.textContent = "Logout Successful";
  title.style.cssText = `
    font-size: 1.8rem;
    color: #007acc;
    margin-bottom: 10px;
  `;
  const message = document.createElement("p");
  message.textContent = "You have been logged out.";
  message.style.cssText = `
    font-size: 1.2rem;
    color: #333333;
    margin-bottom: 20px;
  `;
  const button = document.createElement("button");
  button.textContent = "Go to Homepage";
  button.onclick = function() {
    document.body.removeChild(modal);
    window.location.href = "../Cybersecurity_Certification.html";
  };
  button.style.cssText = `
    background-color: #007acc;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  `;
  button.onmouseover = () => (button.style.backgroundColor = "#005f8f");
  button.onmouseout = () => (button.style.backgroundColor = "#007acc");
  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;";
  closeButton.onclick = function() {
    document.body.removeChild(modal);
  };
  closeButton.style.cssText = `
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 1.5rem;
    color: #333333;
    cursor: pointer;
  `;
  modalContent.appendChild(closeButton);
  modalContent.appendChild(title);
  modalContent.appendChild(message);
  modalContent.appendChild(button);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}

function gradeQuiz() {
  const score = 85;
  const resultDiv = document.getElementById('quizResult');
  
  resultDiv.innerHTML = score >= 80
    ? `<h3>Congratulations! You passed with a score of ${score}%. <a href="#" onclick="generateCertificate()">Download Certificate</a></h3>`
    : `<h3>Sorry, you scored ${score}%. Please try again.</h3>`;
}

function generateCertificate() {
  const userName = localStorage.getItem('username') || 'Student';
  const certContent = `Certificate of Completion\n\nAwarded to ${userName}\nFor passing the CyberTech Cybersecurity Course`;
  
  const blob = new Blob([certContent], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'CyberTech_Certificate.txt';
  link.click();
}

function updateProgress() {
  const progress = 80;
  const progressStatus = document.getElementById("progress-status");
  
  if (progressStatus) {
    progressStatus.style.width = `${progress}%`;
    progressStatus.textContent = `${progress}%`;
    document.getElementById("certificate-button").disabled = progress < 100;
  }
}

function submitFeedback() {
  const feedback = document.getElementById("feedback").value;
  localStorage.setItem("userFeedback", feedback);
  alert("Feedback submitted. Thank you!");
}

function loadProfile() {
  const savedUsername = localStorage.getItem('username');
  const savedEmail = localStorage.getItem('email');

  if (savedUsername) document.getElementById('username').value = savedUsername;
  if (savedEmail) document.getElementById('email').value = savedEmail;
}

function saveProfile() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password && password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  localStorage.setItem('username', username);
  localStorage.setItem('email', email);

  if (password) {
    localStorage.setItem('password', password);
    alert("Profile updated successfully. Password has been changed.");
  } else {
    alert("Profile updated successfully.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");
  updateAuthButton();
  
  dropdownButtons.forEach(button => {
    button.addEventListener("click", function () {
      button.classList.toggle("active");
      const content = button.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});

window.onload = function() {
  loadProfile();
  updateProgress();
  updateAuthButton();
};
