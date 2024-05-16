const express = require("express");
const app = express();
const PORT = 8000;
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  next();
});
app.get("/", (req, res) => {
  res.send("Aman verma");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
