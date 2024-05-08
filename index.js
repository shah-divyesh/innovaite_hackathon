const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const OpenAI = require("openai");

// const config = new Configuration({
//   apiKey: "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",
//   //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
// });

// const openai = new OpenAIApi(config);

const openai = new OpenAI({
  apiKey: "sk-proj-D0U2ULEB5I4f9rE2KbO3T3BlbkFJ9pH9JegvoEWffKHzvxpk", // This is the default and can be omitted
});

//setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());

//endpoint for ChatGPT
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  //   const completion = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     max_tokens: 512,
  //     temperature: 0,
  //     prompt: prompt,
  //   });

  const completion = await openai.chat.completions.create({
    // model: "text-davinci-003",
    // max_tokens: 512,
    // temperature: 0,
    // prompt: prompt,
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
