const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/demo_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(
      `Status: ${mongoose.connection.readyState} [Connected to mongoDB...]`
    )
  )
  .catch((error) =>
    console.error(
      `Status: ${mongoose.connection.readyState} [Couldn't connect to mongoDB...]`,
      error
    )
  );