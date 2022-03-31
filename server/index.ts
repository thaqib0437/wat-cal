import * as express from "express";
import "dotenv/config"

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/", express.static('client/build'))

app.get("/api", (req, res) => {
    res.json({ message: "watCal webApp Setup branch" });
});

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});
