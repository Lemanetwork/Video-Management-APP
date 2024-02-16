const server = require("../server");
const session = require("supertest");
const agent = session(server);

describe("Get videos from the database using different methods", () => {
  it("This endpoint should respond with an array of videos", async () => {
    const { body } = await agent.get("/videos");
    
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
  });

  it("Get videos is confirm with the status code 200", async () => {
    const { statusCode } = await agent.get("/videos");

    expect(statusCode).toBe(200);
    expect(statusCode).not.toBe(404);
  });

  it("Get a video by id with an id received by query", async () => {
    const id = 4;
    const { statusCode, body } = await agent.get("/videos").query({ id });

    expect(body.id).toBe(4);
    expect(body.error).toBeFalsy();
    expect(statusCode).toBe(200);
  });

  it("Returns the status code 404 when the video does not exists", async () => {
    const id = 244;
    const { statusCode, body } = await agent.get("/videos").query({ id });

    expect(statusCode).toBe(404);
    expect(body).toHaveProperty("error");
  });

    it("Get videos by user id with an user id received by query", async () => {
    const userId = "905fedb6-2acb-418c-b261-0b96e133d061";
    const { body } = await agent.get("/videos").query({ userId });
    
    expect(body).toBeTruthy();
    expect(Array.isArray(body)).toBe(true);
  });
}); 