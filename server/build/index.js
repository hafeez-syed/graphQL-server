"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const app = express_1.default();
const port = 9000;
app.get('/', (req, res) => {
    res.send('Hello World!!!');
});
app.listen(port, () => {
    console.log(`[app]: http://localhost:${port}`);
});
