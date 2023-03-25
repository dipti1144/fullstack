
const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
const connection = () => {

  mongoose
    .connect(process.env.MONGOOSE_URL, {
      useNewUrlParser: true,

    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })

   
};

module.exports = {connection};