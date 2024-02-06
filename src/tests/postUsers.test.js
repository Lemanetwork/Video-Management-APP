const server = require("../server");
const session = require("supertest");
const agent = session(server);

const newUser = {
  name: "luis",
  last_name: "manjarrez",
  username: "manjarrez",
  email: "myemail@yes.com",
  password: "password123"
};

describe("Post User", () => {
  xit("Create a new user in the database should reply with status code 200", async () => {
    const { statusCode } = await agent.post("/users").send(newUser);
    expect(statusCode).toBe(200);
    expect(statusCode).not.toBe(400);
  });

  xit("Send an error message when there is missing information", async () => {
    const response = await agent.post("/users").send({ name: "name" });
    expect(response.statusCode).toBe(400);
  });
});
