import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Dark Mode",
      content: "Programmers prefer dark mode because light attracts bugs.",
    },
    {
      id: 2,
      title: "Cache Trouble",
      content: "The developer went broke—he cleared his cache.",
    },
    {
      id: 3,
      title: "Java Eyes",
      content: "Java developers wear glasses because they don't C#.",
    },
    {
      id: 4,
      title: "Foo Bar",
      content: "A programmer's favorite place? The Foo Bar.",
    },
    {
      id: 5,
      title: "Light Bulb",
      content: "Changing a light bulb? That’s a hardware issue.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server is ready");
});
