"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.listen(80);
