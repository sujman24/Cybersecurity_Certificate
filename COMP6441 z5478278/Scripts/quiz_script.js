const allQuestions = [
  {
    question: "Why is cybersecurity important in the digital age?",
    options: [
      "To improve gaming performance",
      "To protect systems, networks, and data from cyber attacks",
      "To increase computer processing power",
      "To manage hardware upgrades"
    ],
    answer: 1
  },
  {
    question: "Which principle ensures that data is only accessible to authorized users?",
    options: ["Confidentiality", "Integrity", "Availability", "Accountability"],
    answer: 0
  },
  {
    question: "What is the main purpose of the CIA Triad in cybersecurity?",
    options: [
      "To protect user privacy on social media",
      "To provide a framework for cybersecurity principles",
      "To control web content accessibility",
      "To enhance online shopping experiences"
    ],
    answer: 1
  },
  {
    question: "Which element of the CIA Triad ensures data remains accurate and trustworthy?",
    options: ["Confidentiality", "Integrity", "Availability", "Encryption"],
    answer: 1
  },
  {
    question: "What does two-factor authentication (2FA) add to the login process?",
    options: [
      "A second password requirement",
      "An additional layer of security",
      "An encryption key",
      "A CAPTCHA test"
    ],
    answer: 1
  },
  {
    question: "What is the role of a firewall in network security?",
    options: [
      "To store passwords",
      "To manage software licenses",
      "To control network traffic and block unauthorized access",
      "To monitor screen brightness"
    ],
    answer: 2
  },
  {
    question: "What does the term 'encryption' refer to in cybersecurity?",
    options: [
      "Converting data into a secure code to prevent unauthorized access",
      "Deleting sensitive files",
      "Backing up data",
      "Enhancing screen resolution"
    ],
    answer: 0
  },
  {
    question: "Which of the following is a common encryption standard?",
    options: ["JPEG", "AES-256", "HTTPS", "HTML"],
    answer: 1
  },
  {
    question: "What is the main benefit of Elliptic Curve Cryptography (ECC)?",
    options: [
      "It provides high security with smaller keys, ideal for mobile devices",
      "It uses larger keys for added security",
      "It only works on offline devices",
      "It prevents hardware malfunction"
    ],
    answer: 0
  },
  {
    question: "Why is threat detection important in cybersecurity?",
    options: [
      "To detect potential security threats and prevent them from causing damage",
      "To increase internet speed",
      "To save battery life",
      "To improve image quality"
    ],
    answer: 0
  },
  {
    question: "Which concept assumes that no user or device should be trusted by default?",
    options: ["CIA Triad", "Zero Trust", "Confidentiality", "Firewall Protection"],
    answer: 1
  },
  {
    question: "What is the main goal of network segmentation?",
    options: [
      "To divide a network into isolated segments to control potential threats",
      "To increase internet speed",
      "To limit screen brightness",
      "To add additional software features"
    ],
    answer: 0
  },
  {
    question: "Which type of encryption uses a public and private key pair?",
    options: ["Symmetric", "Asymmetric", "Elliptic", "Hashing"],
    answer: 1
  },
  {
    question: "What is a common form of two-factor authentication?",
    options: [
      "Fingerprint scan",
      "Voice recognition",
      "Text message code",
      "None of the above"
    ],
    answer: 2
  },
  {
    question: "Why is data encryption essential for online transactions?",
    options: [
      "To convert data into code that only authorized users can access",
      "To enhance screen color quality",
      "To improve loading speed",
      "To store images"
    ],
    answer: 0
  },
  {
    question: "Which of the following is a key component of risk management?",
    options: ["Encryption", "Firewall", "Risk assessment", "Backup"],
    answer: 2
  },
  {
    question: "How does a VPN contribute to network security?",
    options: [
      "By changing IP addresses",
      "By creating a secure, encrypted connection over the internet",
      "By increasing browsing speed",
      "By enhancing display quality"
    ],
    answer: 1
  },
  {
    question: "What does IDS stand for in cybersecurity?",
    options: [
      "Intrusion Detection System",
      "Internet Download Speed",
      "Internal Data Storage",
      "Image Data System"
    ],
    answer: 0
  },
  {
    question: "How does a Zero Trust architecture enhance security?",
    options: [
      "By assuming no user or device is trusted by default",
      "By requiring a backup",
      "By monitoring weather conditions",
      "By logging user names"
    ],
    answer: 0
  },
  {
    question: "Why is regular software patching important?",
    options: [
      "To avoid network segmentation",
      "To fix vulnerabilities and improve security",
      "To increase screen resolution",
      "To reduce internet usage"
    ],
    answer: 1
  },
  {
    question: "What is the function of an Intrusion Prevention System (IPS)?",
    options: [
      "To prevent malware from spreading",
      "To actively block detected threats",
      "To store backups",
      "To manage screen brightness"
    ],
    answer: 1
  },
  {
    question: "How does multi-factor authentication (MFA) differ from 2FA?",
    options: [
      "MFA uses more than two factors",
      "MFA is less secure",
      "MFA is only for personal use",
      "MFA replaces passwords"
    ],
    answer: 0
  },
  {
    question: "What is the primary role of an ethical hacker?",
    options: [
      "To identify and exploit vulnerabilities with authorization",
      "To distribute malware",
      "To bypass security",
      "To design user interfaces"
    ],
    answer: 0
  },
  {
    question: "What does SOC stand for in cybersecurity?",
    options: [
      "Security Operations Center",
      "Secure Online Community",
      "Server Operations Check",
      "Safe Office Connection"
    ],
    answer: 0
  },
  {
    question: "Which type of malware encrypts files and demands payment for decryption?",
    options: ["Virus", "Ransomware", "Adware", "Spyware"],
    answer: 1
  },
  {
    question: "How does phishing compromise security?",
    options: [
      "By tricking users into giving up sensitive information",
      "By encrypting files",
      "By blocking internet access",
      "By enhancing network speed"
    ],
    answer: 0
  },
  {
    question: "Which of the following is an example of data integrity?",
    options: [
      "Ensuring data remains accurate and unaltered",
      "Deleting unnecessary files",
      "Adding users to the network",
      "Updating software"
    ],
    answer: 0
  },
  {
    question: "What does a VPN primarily provide?",
    options: [
      "Speed boost",
      "Secure remote access",
      "File storage",
      "Screen brightness control"
    ],
    answer: 1
  },
  {
    question: "What does malware stand for?",
    options: [
      "Malicious Software",
      "Modified Language",
      "Micro Application",
      "Machine Learning"
    ],
    answer: 0
  },
  {
    question: "How does encryption enhance cybersecurity?",
    options: [
      "By converting readable data into a secure code",
      "By saving energy",
      "By increasing download speed",
      "By changing internet protocols"
    ],
    answer: 0
  },
  {
    question: "What is the primary function of data encryption?",
    options: [
      "To allow everyone to access data",
      "To prevent unauthorized access by converting data into a secure format",
      "To improve data quality",
      "To enhance internet speed"
    ],
    answer: 1
  },
  {
    question: "What type of attack attempts to overwhelm a network with excessive traffic?",
    options: ["Phishing", "Ransomware", "DoS (Denial of Service)", "Spyware"],
    answer: 2
  },
  {
    question: "Which cybersecurity principle focuses on making sure that data is available to authorized users when needed?",
    options: ["Confidentiality", "Integrity", "Availability", "Authorization"],
    answer: 2
  },
  {
    question: "How does SSL/TLS contribute to cybersecurity?",
    options: [
      "By creating secure, encrypted connections for data transmission",
      "By increasing data storage",
      "By managing user accounts",
      "By reducing internet costs"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of a Security Information and Event Management (SIEM) system?",
    options: [
      "To record and analyze security events in real-time",
      "To store large amounts of data",
      "To provide hardware diagnostics",
      "To manage screen brightness"
    ],
    answer: 0
  },
  {
    question: "In cybersecurity, what does VPN stand for?",
    options: [
      "Virtual Private Network",
      "Verified Public Name",
      "Virtual Processing Node",
      "Visual Pixel Number"
    ],
    answer: 0
  },
  {
    question: "What is social engineering in the context of cybersecurity?",
    options: [
      "A strategy to improve network speed",
      "A tactic to manipulate people into revealing confidential information",
      "An encryption technique",
      "A type of firewall configuration"
    ],
    answer: 1
  },
  {
    question: "Which of the following is an example of multi-factor authentication?",
    options: [
      "Using a password and a security question",
      "Using an email address only",
      "Using a fingerprint scan and a password",
      "Logging in with just a username"
    ],
    answer: 2
  },
  {
    question: "What does the term 'Zero-Day Vulnerability' refer to?",
    options: [
      "A vulnerability that is discovered and exploited on the same day",
      "A type of malware",
      "A firewall setting",
      "A backup method"
    ],
    answer: 0
  },
  {
    question: "Why is patch management important in cybersecurity?",
    options: [
      "To fix security vulnerabilities and prevent exploits",
      "To add new users",
      "To monitor internet speed",
      "To save disk space"
    ],
    answer: 0
  },
  {
    question: "How does encryption enhance email security?",
    options: [
      "By blocking spam",
      "By converting email content into unreadable code for unauthorized users",
      "By deleting unwanted emails",
      "By increasing email storage"
    ],
    answer: 1
  },
  {
    question: "Which organization is primarily responsible for setting cybersecurity standards in the United States?",
    options: ["FBI", "NIST", "WHO", "IMF"],
    answer: 1
  },
  {
    question: "What is a phishing attack designed to do?",
    options: [
      "To trick users into providing sensitive information",
      "To improve network performance",
      "To enhance screen resolution",
      "To provide software updates"
    ],
    answer: 0
  },
  {
    question: "How does a firewall contribute to cybersecurity?",
    options: [
      "By blocking unauthorized access to a network",
      "By storing files securely",
      "By increasing internet speed",
      "By managing user credentials"
    ],
    answer: 0
  },
  {
    question: "What is ransomware?",
    options: [
      "A type of software that encrypts files and demands payment to decrypt them",
      "A virus that deletes files",
      "A tool to enhance user interface",
      "A network configuration setting"
    ],
    answer: 0
  },
  {
    question: "Why is data integrity important in cybersecurity?",
    options: [
      "To ensure data remains accurate and unaltered",
      "To improve data storage capacity",
      "To decrease internet usage",
      "To enhance video quality"
    ],
    answer: 0
  },
  {
    question: "What is the function of a DDoS attack?",
    options: [
      "To overload and disrupt a network or service by flooding it with traffic",
      "To delete files on a server",
      "To monitor data usage",
      "To protect against malware"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of an intrusion detection system (IDS)?",
    options: [
      "To detect unauthorized access to a network",
      "To increase download speed",
      "To change encryption settings",
      "To manage user accounts"
    ],
    answer: 0
  },
  {
    question: "How does asymmetric encryption work?",
    options: [
      "It uses a public and private key pair for secure data exchange",
      "It requires only one key for both encryption and decryption",
      "It stores data in plain text",
      "It speeds up internet connectivity"
    ],
    answer: 0
  },
  {
    question: "What does a penetration test aim to do?",
    options: [
      "To simulate cyber attacks and identify vulnerabilities",
      "To remove malware from a network",
      "To increase system memory",
      "To improve software interface"
    ],
    answer: 0
  }
];

const quizQuestions = [];
while (quizQuestions.length < 20) {
  const randomIndex = Math.floor(Math.random() * allQuestions.length);
  const question = allQuestions[randomIndex];
  if (!quizQuestions.includes(question)) {
    quizQuestions.push(question);
  }
}

let currentQuestionIndex = 0;
let userAnswers = Array(quizQuestions.length).fill(null);
let correctAnswers = 0;
let incorrectAnswers = 0;
let answeredQuestions = 0;
let timer;
let timeLeft = 30 * 60;

function shuffleOptions(options) {
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

function updateProgress() {
  const percentage = ((correctAnswers / answeredQuestions) * 100).toFixed(2);
  document.getElementById("score-percentage").textContent = `Score: ${percentage}%`;
  document.getElementById("incorrect-count").textContent = `Incorrect: ${incorrectAnswers}`;
}

function loadQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  const correctAnswerText = question.options[question.answer];
  question.options = shuffleOptions([...question.options]);
  question.answer = question.options.indexOf(correctAnswerText);
  
  document.getElementById("question-text").textContent = 
    `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}: ${question.question}`;
  
  const answersContainer = document.getElementById("answers-container");
  answersContainer.innerHTML = "";
  question.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.classList.add("answer-button");
    optionButton.onclick = () => selectAnswer(index, optionButton);
    
    if (userAnswers[currentQuestionIndex] !== null) {
      optionButton.disabled = true;
      if (userAnswers[currentQuestionIndex] === index) {
        optionButton.classList.add(userAnswers[currentQuestionIndex] === question.answer ? 'correct' : 'incorrect');
      }
    }
    
    answersContainer.appendChild(optionButton);
  });
  
  document.getElementById("prevButton").disabled = currentQuestionIndex === 0;
  document.getElementById("nextButton").textContent = 
    currentQuestionIndex === quizQuestions.length - 1 ? "Submit" : "Next";
}

function selectAnswer(index, button) {
  const question = quizQuestions[currentQuestionIndex];
  if (userAnswers[currentQuestionIndex] === null) {
    answeredQuestions++;
  }
  userAnswers[currentQuestionIndex] = index;
  const isCorrect = index === question.answer;
  button.classList.add(isCorrect ? 'correct' : 'incorrect');
  if (isCorrect) {
    correctAnswers++;
  } else {
    incorrectAnswers++;
    if(incorrectAnswers > 4) {resetProgress()};
  }
  const buttons = document.querySelectorAll('.answer-button');
  buttons.forEach(btn => btn.disabled = true);
  updateProgress();
  setTimeout(function() {
    nextQuestion();
  }, 5000);
}

function nextQuestion() {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    calculateResult();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function calculateResult() {
  const percentage = ((correctAnswers / quizQuestions.length) * 100).toFixed(2);
  if (percentage >= 80) {
    displayCertificate(percentage);
  } else {
    resetProgress();
  }
}

function displayCertificate(score) {
  const userName = prompt("Congratulations! Please enter your name for the certificate:");
  const certificatePage = `
    <html>
  <head>
    <title>Certificate of Completion</title>
    <style>
      body {
        text-align: center;
        font-family: 'Arial', sans-serif;
        color: #333;
        background-color: #f8f9fa;
        margin: 0;
        padding: 0;
      }
      .certificate-container {
        max-width: 800px;
        margin: 40px auto;
        padding: 50px;
        border: 8px solid #007acc;
        border-radius: 15px;
        background-color: #ffffff;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
      h1 {
        font-size: 2.5rem;
        color: #007acc;
        margin-bottom: 20px;
        font-weight: bold;
      }
      .certificate-text {
        font-size: 1.2rem;
        margin: 20px 0;
      }
      h2 {
        font-size: 2rem;
        color: #333;
        margin: 10px 0;
      }
      .score {
        font-size: 1.5rem;
        color: #007acc;
        font-weight: bold;
        margin: 20px 0;
      }
      .footer {
        font-size: 1rem;
        color: #888;
        margin-top: 30px;
      }
      .highlight {
        color: #007acc;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="certificate-container">
      <h1>Certificate of Completion</h1>
      <p class="certificate-text">This certificate is awarded to:</p>
      <h2 class="highlight">${userName}</h2>
      <p class="certificate-text">For successfully completing the <span class="highlight">Cybersecurity Quiz</span></p>
      <p class="score">Score: ${score}%</p>
      <p class="footer">© 2024 CyberTech</p>
    </div>
  </body>
  </html>`;
  const newWindow = window.open();
  newWindow.document.write(certificatePage);
}

function resetProgress() {
  alert("Sorry, you did not pass. Your progress will be reset.");
  localStorage.setItem("quizProgress", JSON.stringify([]));
  window.location.href = "../Cybersecurity_Certification.html";
}

function startQuiz() {
  document.getElementById("start-overlay").style.display = "none";
  document.getElementById("timer").style.display = "block";
  document.getElementById("progress").style.display = "block";
  document.getElementById("question-container").style.display = "block";
  document.querySelector(".quiz-navigation").style.display = "flex";
  startTimer();
  loadQuestion();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").textContent = 
      `Time left: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      calculateResult();
    }
  }, 1000);
}

window.onload = function() {
  loadQuestion();
  updateProgress();
};
