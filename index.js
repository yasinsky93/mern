const express = require('express');
const mongoose = require('mongoose');
const {config} = require('./constants');

const server = express();

start();

async function start() {
    try {
        await mongoose.connect(config.dbURI)
        server.listen(config.devPort, () => console.log(`App has been started at ${config.devPort}`));
    } catch (e) {
        console.log(`Error during starting server: ${e}`);
        process.exit(1);
    }
}
