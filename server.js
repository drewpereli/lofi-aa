const express = require("express");
const app = express();
const youtubeStream = require("youtube-audio-stream");
const videoUrl = "https://www.youtube.com/watch?v=5qap5aO4i9A";

app.get("/", function(req, res) {
  try {
    youtubeStream(videoUrl).pipe(res);
  } catch (exception) {
    console.log(exception);
    res.status(500).send(exception);
  }
});

app.listen(3000);
