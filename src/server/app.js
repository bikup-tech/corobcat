
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const { urlencoded, json } = require('body-parser');
const debug = require('debug')('app');
const mongoose = require('mongoose');

// Routers


const app = express();
const PORT = process.env.PORT || 4200;

debug(`>>> Starting server in -- ${process.env.NODE_ENV} -- mode <<<`);

app.use(cors());

app.use(urlencoded({ extended: true }));
app.use(json());

app.listen(PORT, () => debug(`Server running in port: ${PORT}`));