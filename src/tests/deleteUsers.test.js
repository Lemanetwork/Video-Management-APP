const server = require("../server");
const session = require("supertest");
const agent = session(server);

describe("Delete users", () => {
  xit("Delete users from the database using the username", async () => {
    const response = await agent.delete(
      "/users/manjarrez"
    );
    expect(response.body.message).toMatch("User was deleted successfully");
    expect(response.statusCode).toBe(200);
  });
});
