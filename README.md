Video Management APP

This video management web application is a personal project created from the backend side (server + RESTful API + database). It includes a CRUD for videos, a CRUD for users, comments, and likes.

With this app, registered users have full access to post videos, watch public and private videos, comment, read other users' comments, give likes, etc. Meanwhile, unregistered users have limited access and can only perform actions such as, for example, watching public videos and reading the comments of public videos.

For the realization of the project, I used the Modular Monolith Architecture, the MVC design pattern, and some of the SOLID principles. This was done in order to create a clean, modularized, reusable, maintainable, and scalable code.

The technologies implemented in this backend were selected looking for versatility, efficiency, and scalability. In addition, practices such as token management, password encryption, and data validation were used to strengthen security. Finally, to ensure the integrity of the system and early error detection, I implemented unit tests using the Jest framework.

Server:
- JavaScript
- Node.js
- Express.js

RESTful API:
- Swagger(OpenAPI 3.0)
- JSON Web Token (JWT)
- Bcrypt
- Joi
- Jest

Database
- PostgreSQL
- Sequelize
