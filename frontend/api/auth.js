import client from "./client";

const login = (...credentials) => client.post("/login", credentials);
const register = (...credentials) => client.post("/register", credentials);

export default { login, register };
