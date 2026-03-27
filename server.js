const express = require("express");
const app = express();

app.use(express.static(".")); // serve HTML

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
