"use strict";
// enable requireing typescript files
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// let args = {files: true};
// require('ts-node').register(args);
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
// const  bodyParser = require('body-parser');
// const morgan = require('morgan')
var app = express_1.default();
var PORT = 8080;
// Routes
// MIDDLEWARE
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.urlencoded({
    extended: false
}));
app.use(body_parser_1.default.json());
// routing
// Starting Server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
