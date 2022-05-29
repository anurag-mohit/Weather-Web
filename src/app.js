const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
const hbs = require("hbs");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
// console.log(static_path);

app.set('view engine', 'hbs');
app.set('views', template_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path)

app.get("/", (req, res) => {
    res.render("index");
})
app.get("/weather", (req, res) => {
    res.render("weather");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("*", (req, res) => {
    res.render("error404",{
        errormsg: "OOPS! Page Not Found"
    });
})
app.listen(port, (err) => {
    console.log("listening")
})