import express from "express";
import getPort from "get-port";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  res.send(
    `"login attempt with username:${username} and password:${password}"`
  );
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

const startServer = async () => {
  try {
    const port = await getPort();
    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });
  } catch (error) {
    console.error(`Error getting port: ${error}`);
  }
};

export { app, startServer };
