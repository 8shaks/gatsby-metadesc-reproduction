// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
var path = require('path');
// Routes
// const questionaire = require("./routes/api/questionaire");
// const referral = require("./routes/api/referral");
// const contact = require("./routes/api/contact");
// const blog = require("./routes/api/blog")
const app = express();


app.use(compression())


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Use Routes

app.use(function(req, res, next) {
  
  // res.header(`Access-Control-Allow-Origin`, `*`)
  res.header(`Access-Control-Allow-Origin`, `http://localhost:8000`)
  res.header(`Access-Control-Allow-Credentials`, true)
  res.header(
    `Access-Control-Allow-Headers`,
    `Origin, X-Requested-With, Content-Type, Accept`
  )
  next();
});


// app.use("/api/questionaire", questionaire);
// app.use("/api/refferal", referral)
// app.use("/api/contact", contact )
// app.use("/api/blog", blog )
// Server Static Assets if in Production


app.use(express.static("client/public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "public", "404","index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
