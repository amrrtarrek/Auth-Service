const { findUser } = require("./users");

function login(username, password) {
  // --- START OF TASK 1: INPUT SANITIZATION ---
  
  // 1. Ensure both inputs are strictly strings
  if (typeof username !== "string" || typeof password !== "string") {
    return { success: false, message: "Invalid input: credentials must be strings" };
  }

  // 2. Ensure neither string is empty (ignoring accidental spaces)
  if (username.trim() === "" || password.trim() === "") {
    return { success: false, message: "Invalid input: credentials cannot be empty" };
  }
  
  // --- END OF TASK 1 ---

  const user = findUser(username);

  if (!user) {
    return { success: false, message: "Invalid credentials" };
  }

  if (user.password !== password) {
    return { success: false, message: "Invalid credentials" };
  }

  return {
    success: true,
    message: "Login successful",
    role: user.role
  };
}

module.exports = { login };
