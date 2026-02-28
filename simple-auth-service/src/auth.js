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
