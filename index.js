const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const OpenAI = require("openai");

// const openai = new OpenAI({
//   apiKey: "your_key", // This is the default and can be omitted
// });

//setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());

//endpoint for ChatGPT
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion);

  res.send(completion?.choices[0]?.message?.content);
});

const port = 8080;
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
