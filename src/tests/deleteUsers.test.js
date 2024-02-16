const server = require("../server");
const session = require("supertest");
const agent = session(server);

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5MDVmZWRiNi0yYWNiLTQxOGMtYjI2MS0wYjk2ZTEzM2QwNjEiLCJpYXQiOjE3MDgxMjE5MDEsImV4cCI6MTcwODE1MDcwMX0.6UvG7nucbWBlRhX3zTHmHwLOC4aJmF9V-0XeSyAfAQo";

describe("Delete users", () => {
  it("Delete users from the database using the username returns a status code 204 and a message", async () => {
    const username = "manjarrez";
    const { statusCode } = await agent.delete(`/users/${username}`).set("Authorization", `Bearer ${jwt}`);

    expect(statusCode).toBe(204);
    expect(statusCode).not.toBe(400);
  });

    it("Returns an error message and the status code 400 if the user does not exist", async () => {
    const username = "maxi";
    const { statusCode, body } = await agent.delete(`/users/${username}`).set("Authorization", `Bearer ${jwt}`);
    
    expect(statusCode).toBe(400);
    expect(body.error).toBeTruthy();
    expect(body.error).toEqual("User does not exists");
  });
});
