import { app } from "./app.js";
import { connectToDB } from "./Data/database.js";

connectToDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
