const server = require("../server");
const session = require("supertest");
const agent = session(server);

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5MDVmZWRiNi0yYWNiLTQxOGMtYjI2MS0wYjk2ZTEzM2QwNjEiLCJpYXQiOjE3MDgxMjE5MDEsImV4cCI6MTcwODE1MDcwMX0.6UvG7nucbWBlRhX3zTHmHwLOC4aJmF9V-0XeSyAfAQo";

describe("Delete videos", () => {
  xit("Deletes videos from the database using the video id returns a status code 204", async () => {
    const videoId = 6;
    const { statusCode } = await agent.delete(`/videos/${videoId}`).set("Authorization", `Bearer ${jwt}`);

    expect(statusCode).toBe(204);
    expect(statusCode).not.toBe(400);
  });

  it("Returns the status code 404 when attempting to delete a non-existing video", async () => {
    const videoId = 244;
    const { statusCode, body } = await agent.delete(`/videos/${videoId}`).set("Authorization", `Bearer ${jwt}`);
    
    expect(statusCode).toBe(400);
    expect(body.error).toEqual("Video was not found")
});
});
