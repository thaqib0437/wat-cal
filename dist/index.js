"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
require("dotenv/config");
const app = express();
const PORT = process.env.PORT || 3001;
app.use("/", express.static('client/build'));
app.get("/api", (req, res) => {
    res.json({ message: "watCal webApp Setup branch" });
});
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map