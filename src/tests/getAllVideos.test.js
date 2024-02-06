const server = require("../server");
const session = require("supertest");
const agent = session(server);

describe("Get videos from the database", () => {
  xit("This endpoint should respond with an array of videos", async () => {
    const { body } = await agent.get("/videos");
    expect(body).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
  });

  xit("Get videos is confirm with status code 200", async () => {
    const { statusCode } = await agent.get("/videos");
    expect(statusCode).toBe(200);
    expect(statusCode).not.toBe(400);
  });
});
