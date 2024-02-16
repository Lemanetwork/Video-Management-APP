const server = require("../server");
const session = require("supertest");
const agent = session(server);

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5MDVmZWRiNi0yYWNiLTQxOGMtYjI2MS0wYjk2ZTEzM2QwNjEiLCJpYXQiOjE3MDgxMjE5MDEsImV4cCI6MTcwODE1MDcwMX0.6UvG7nucbWBlRhX3zTHmHwLOC4aJmF9V-0XeSyAfAQo";
const VideoId = "13";

describe("Liking videos", () => {
  it("Liking any video retuns the like data and the status code 201", async () => {
    const { statusCode, body } = await agent.post("/likes").set("Authorization", `Bearer ${jwt}`).query({ VideoId });
    
    expect(typeof body).toBe("object");
    expect(statusCode).toBe(201);
    expect(body).toHaveProperty("VideoId");
  });

  it("Liking the same video retuns an error message and the status code 400", async () => {
    const { statusCode, body } = await agent.post("/likes").set("Authorization", `Bearer ${jwt}`).query({ VideoId });
    
    expect(body.error).toEqual("You already liked this video");
    expect(statusCode).toBe(400);
  });
});
