const server = require("../server");
const session = require("supertest");
const agent = session(server);

describe("Delete videos", () => {
  xit("Delete videos from the database using the id", async () => {
    const response = await agent.delete(
      "/videos/4"
    );
    expect(response.statusCode).toBe(200);
  });
});
