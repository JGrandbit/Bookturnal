const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
if(process.env.NODE_ENV === "production") {
    app.use(express.static("googlebook/build"));
}
app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });