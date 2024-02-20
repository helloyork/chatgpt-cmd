#!/usr/bin/env node

import { app } from "./src/cli.js";

/**@type {{[key: string]: {name: string, description: string, action?: Function, scriptPath?: string}}} */
const Commands = {
    "chat": {
        name: "chat",
        description: "Chat with ChatGPT",
    }
};

app.registerProgram({
    name: "ChatGPT-CMD",
    description: "ChatGPT Command Line Interface Tool",
    version: "1.0.0",
})
    .registerCommands(Commands)
    .parseArgs();





