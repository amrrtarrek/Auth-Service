const { findUser } = require("./users");

function login(username, password) {

  if (typeof username !== "string" || typeof password !== "string") {
    return { success: false, message: "Invalid input: credentials must be strings" };
  }

  if (username.trim() === "" || password.trim() === "") {
    return { success: false, message: "Invalid input: credentials cannot be empty" };
  }
  

  if (password.length < 8) {
    return { success: false, message: "Password must be at least 8 characters long" };
  }
  

  const user = findUser(username);

if (!user) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Failed login attempt: Username '${username}' not found.`);
    
    return { success: false, message: "Invalid credentials" };
  }

if (user.password !== password) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Failed login attempt: Invalid password provided for username '${username}'.`);
    
    return { success: false, message: "Invalid credentials" };
  }

  return {
    success: true,
    message: "Login successful",
    role: user.role
  };
}

module.exports = { login };
