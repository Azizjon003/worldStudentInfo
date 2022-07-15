const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./middleware/app");
const Port = process.env.PORT || 8000;

app.listen(Port, () => {
  console.log(`server running ${Port}`);
});
