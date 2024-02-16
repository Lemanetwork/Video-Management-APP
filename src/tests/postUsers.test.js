const server = require("../server");
const session = require("supertest");
const agent = session(server);

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5MDVmZWRiNi0yYWNiLTQxOGMtYjI2MS0wYjk2ZTEzM2QwNjEiLCJpYXQiOjE3MDgxMjE5MDEsImV4cCI6MTcwODE1MDcwMX0.6UvG7nucbWBlRhX3zTHmHwLOC4aJmF9V-0XeSyAfAQo";

const newUser = {
  name: "luis",
  last_name: "manjarrez",
  username: "manjarrez",
  email: "myemail@yes.com",
  password: "password123"
};

const anotherUser = {
  name: "samuel",
  last_name: "manjarrez",
  username: "manjarrez",
  email: "newemail@yes.com",
  password: "newpassword"
};

describe("Post Users", () => {
  it("Create a new user in the database should reply with status code 200", async () => {
    await agent.delete("/users/manjarrez").set("Authorization", `Bearer ${jwt}`);

    const { statusCode } = await agent.post("/users").send(newUser);

    expect(statusCode).toBe(201);
    expect(statusCode).not.toBe(400);
  });

  it("Reply with the status code 400 and an error message when the username already exists", async () => {
    const response = await agent.post("/users").send(anotherUser);

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toEqual("Username already exists");
  });
});
