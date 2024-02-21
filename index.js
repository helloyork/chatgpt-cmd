#!/usr/bin/env node

import { app } from "./src/cli.js";

/**@type {{[key: string]: {name: string, description: string, action?: Function, scriptPath?: string}}} */
const Commands = {
    "chat": {
        name: "chat",
        description: "Chat with ChatGPT",
        scriptPath: "src/commands/chat.js"
    }
};

const Options = {
    "--debug": {
        description: "Enable debug mode",
        defaultValue: false,
    },
    "--key, --api-key <key>": {
        description: "The API key to use",
        defaultValue: "",
    },
    "--env, --env-file <path>": {
        description: "The path to the .env file",
        defaultValue: ".env",
    }
};

app.registerProgram({
    name: "ChatGPT-CMD",
    description: "ChatGPT Command Line Interface Tool",
    version: "1.0.0",
})
    .registerCommands(Commands)
    .registerOptions(Options)
    .start();





