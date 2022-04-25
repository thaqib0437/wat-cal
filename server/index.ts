import * as express from "express";
import "dotenv/config"
import morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV;

if(NODE_ENV === "dev"){
    app.use(morgan("dev"))
}
else{
    app.use(morgan("tiny"))
}

app.use(express.static('client/build'))

app.get("/api", (req, res) => {
    res.json({ message: "watCal webApp prod file..." });
});

app.listen(PORT);
