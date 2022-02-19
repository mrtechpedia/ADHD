const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");

const app = express();
const cors = require("cors");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

require("./routes/authRoutes")(app);
require("./routes/scoreRoutes")(app);

const PORT = process.env.PORT || 6000;
app.listen(PORT);
