const server = require("../server");
const session = require("supertest");
const agent = session(server);

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5MDVmZWRiNi0yYWNiLTQxOGMtYjI2MS0wYjk2ZTEzM2QwNjEiLCJpYXQiOjE3MDgxMjE5MDEsImV4cCI6MTcwODE1MDcwMX0.6UvG7nucbWBlRhX3zTHmHwLOC4aJmF9V-0XeSyAfAQo";

describe("Get comments about the videos from the database", () => {
  it("Get all comments returns an array of comments with the status code 200", async () => {
    const { statusCode, body } = await agent.get("/comments").set("Authorization", `Bearer ${jwt}`);
    
    expect(Array.isArray(body)).toBe(true);
    expect(statusCode).toBe(200);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('comment');
  });
});