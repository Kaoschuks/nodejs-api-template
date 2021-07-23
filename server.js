const app = require("./src/views/app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Sever now running on PORT: ${PORT}`));
