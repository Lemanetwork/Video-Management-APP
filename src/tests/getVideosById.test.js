const server = require("../server");
const session = require("supertest");
const agent = session(server);

describe("Get videos by id from the database", () => {
  xit("Get a video with an id received by params", async () => {
    const { body } = await agent.get("/videos/2");
    expect(body.id).toBe(2);
    expect(statusCode).toBe(200);
  });
});
