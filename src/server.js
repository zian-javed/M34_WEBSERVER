const express = require ("express");
const app = express();
const port = 5000;

app.use("/static", express.static("public"));
app.use("/static/page2.html", express.static("public"));
app.use("/static/page3.html", express.static("public"));

app.listen(port,() => {
    console.log(`Listening on port ${port}`)
});
