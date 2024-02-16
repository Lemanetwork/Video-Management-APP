const server = require("../server");
const session = require("supertest");
const agent = session(server);

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5MDVmZWRiNi0yYWNiLTQxOGMtYjI2MS0wYjk2ZTEzM2QwNjEiLCJpYXQiOjE3MDgxMjE5MDEsImV4cCI6MTcwODE1MDcwMX0.6UvG7nucbWBlRhX3zTHmHwLOC4aJmF9V-0XeSyAfAQo";

describe("Get users from the database", () => {
  it("Get all users returns an array of users with the status code 200", async () => {
    const { statusCode, body } = await agent.get("/users").set("Authorization", `Bearer ${jwt}`);
    
    expect(Array.isArray(body)).toBe(true);
    expect(body).toBeTruthy();
    expect(statusCode).toBe(200);
    expect(statusCode).not.toBe(404);
  });

  it("Get users by username returns an error message when user does not exists in the database", async () => {
    const username = "cristianoronaldo";
    const { statusCode, body } = await agent.get("/users").query({ username }).set("Authorization", `Bearer ${jwt}`);

    expect(body.error).toEqual("User was not found");
    expect(statusCode).toBe(404);
  });

  it("Get a user by username returns an object with the user data", async () => {
    const username = "samuelmanja";
    const { statusCode, body } = await agent.get("/users").query({ username }).set("Authorization", `Bearer ${jwt}`);
    
    expect(typeof body).toBe("object");
    expect(statusCode).toBe(200);
    expect(body.username).toBe("samuelmanja");
  });
});