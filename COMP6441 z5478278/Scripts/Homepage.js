const readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let validUsername = 'admin';
let validPassword = 'Password123.';

function registrationHelper(text) {
  console.log('\nRegistration failed! ❌');
  console.log('❗ %s ❗', text);
  console.log('You will be taken back to the registration page now!\n');
  setTimeout(function () {
    Register();
  }, 3000);
}

function passwordValidation(username, password) {
  const criteria = [
    { text: "Password cannot match the Username", isValid: username !== password },
    { text: "Password must be at least 8 characters long", isValid: password.length >= 8 },
    { text: "Password must contain at least one uppercase letter", isValid: /[A-Z]/.test(password) },
    { text: "Password must contain at least one lowercase letter", isValid: /[a-z]/.test(password) },
    { text: "Password must contain at least one digit", isValid: /\d/.test(password) },
    { text: "Password must contain at least one special character", isValid: /[.@$#^()_-`~!%*?&]/.test(password) }
  ];
  const allValid = criteria.every(criterion => criterion.isValid);
  return { allValid, criteria };
}

function Homepage() {
  console.clear();
  console.log("=====================================");
  console.log("       Welcome to the Homepage       ");
  console.log("=====================================\n");
  console.log("Please select an option:");
  console.log("[0] Login");
  console.log("[1] Register\n");
  rl.question("Enter your choice (0/1): ", function (Option) {
    if (Option === '1') {
      Register();
    } else if (Option === '0') {
      Login();
    } else {
      console.log("\nInvalid option! Please try again.\n");
      Homepage();
    }
  });
}

function Register() {
  console.clear();
  console.log("=====================================");
  console.log("      Welcome to the Registration     ");
  console.log("=====================================\n");
  console.log('🔒 Password Criteria:');
  console.log('------------------------------');
  console.log('1️⃣  At least 8 characters long');
  console.log('2️⃣  Must contain at least one uppercase letter (A-Z)');
  console.log('3️⃣  Must contain at least one lowercase letter (a-z)');
  console.log('4️⃣  Must contain at least one digit (0-9)');
  console.log('5️⃣  Must contain at least one special character (@, $, #, etc.)');
  console.log('6️⃣  Password cannot match the username');
  console.log('------------------------------\n');
  rl.question('Please enter your desired username: ', function (username) {
    console.log("\nUsername accepted!\n");
    rl.question('Please enter your password: ', function (password) {
      const validation = passwordValidation(username, password);
      if (validation.allValid) {
        console.log("\nPassword accepted! Please confirm it below.\n");
        rl.question('Confirm your password: ', function (passwordConfirm) {
          if (password !== passwordConfirm) {
            registrationHelper("❌ Passwords don't match! Please try again.");
          } else {
            console.log('=====================================');
            console.log('  Registration successful! 🎉');
            console.log('  Redirecting you to the login page...');
            console.log('=====================================\n');
            validUsername = username;
            validPassword = password;
            setTimeout(function () {
              Login();
            }, 3000);
          }
        });
      } else {
        console.log('\nPlease review the password criteria again.\n');
        displayPasswordCriteria(validation.criteria);
        setTimeout(function () {
          console.log('\nPlease change the password to match the criteria.\n');
          console.log('\nYou will now be redirected to the Registration Page again...\n');
        }, 3000);
        setTimeout(function () {
          Register();
        }, 5000);
      }
    });
  });
}

function displayPasswordCriteria(criteria) {
  console.log("🔒 Password Criteria Check:");
  let index = 0;
  const displayNextCriterion = () => {
    if (index < criteria.length) {
      const criterion = criteria[index];
      if (criterion.isValid) {console.log(`✅ ${index + 1}. ${criterion.text}`);} 
      else {console.log(`❌ ${index + 1}. ${criterion.text}`);}
      index++;
      setTimeout(displayNextCriterion, 500);
    }
  };
  displayNextCriterion();
}

function Login() {
  console.clear();
  console.log("=====================================");
  console.log("         Welcome to the Login         ");
  console.log("=====================================\n");
  rl.question('Please enter your username: ', function (username) {
    console.log("\nUsername received!\n");
    rl.question('Please enter your password: ', function (password) {
      validateLogin(username, password);
    });
  });
}

function validateLogin(username, password) {
  console.log("\n\nValidating credentials...");
  let loadingBarLength = 30;
  const startTime = Date.now();
  let interval = setInterval(() => {
    let progress = Math.min(loadingBarLength, loadingBarLength * (Date.now() - startTime) / 3000);
    let bar = '⬜'.repeat(progress) + '⬛'.repeat(loadingBarLength - progress);
    process.stdout.write(`\rLoading: [${bar}] ${Math.round((progress / loadingBarLength) * 100)}%`);
    if (progress >= loadingBarLength) {
      clearInterval(interval);
      if (username === validUsername && password === validPassword) {
        console.log('\n\n=====================================');
        console.log('  Login successful! 🎉');
        console.log('  Welcome to the secure area.');
        console.log('=====================================\n');
        rl.close();
      } else {
        console.log('\n\n❌ Invalid username or password! Please try again.\n');
        setTimeout(function () {
          rl.close(); 
          rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
          Login();
        }, 2000);
      }
    }
  }, 100);
}


Homepage();


/* 
TODO
- Hide Password
- Two factor authentication
- Password hashing
- Save all the inputs in an online database
- 
*/