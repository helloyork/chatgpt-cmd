
import commander from "commander";
import path from "path";
import inquirer from "inquirer";
import chalk from "chalk";

export const colors = {

};

const { program, Option } = commander;

class App {
    /* Static */
    static async loadScript(scriptPath) {
        const module = await import(path.resolve("./commands", scriptPath));
        return module;
    }
    static Option = Option;

    /* Constructor */
    /**
     * @constructor
     * @param {{program: import("commander").Command, inquirer: inquirer, chalk: import("chalk").ChalkInstance}} param0 
     */
    constructor({ program, inquirer, chalk }) {
        this.program = program;
        this.inquirer = inquirer;
        this.chalk = chalk;
    }

    /* Instance */
    get options() {
        return this.program.opts();
    }
    /**
     * @typedef {Object} ProgramDefinition
     * @property {string} name
     * @property {string} description
     * @property {string} version
     */
    /**
     * Register the program
     * @param {ProgramDefinition} param0
     * @returns {this}
     */
    registerProgram({ name, description, version }) {
        this.program
            .name(name)
            .description(description)
            .version(version);
        return this;
    }
    /**
     * @typedef {Object} CommandDefinition
     * @property {string} name
     * @property {string} description
     * @property {Function} [action]
     * @property {string} [scriptPath]
     */
    /**
     * Register commands to the program
     * @param {{[key: string]: CommandDefinition}} commands 
     * @returns {this}
     */
    registerCommands(commands) {
        Object.entries(commands).forEach(([name, command]) => {
            this.program.command(name)
                .description(command.description)
                .action(async () => {
                    const module = await App.loadScript(command.scriptPath || name);
                    await module.default?.();
                    if (command.action) command.action(module);
                });
        });
        return this;
    }
    /**
     * Register options to the program
     * @param {{[key: string]: {description: string, defaultValue: any}}} options 
     * @returns {this}
     */
    registerOptions(options) {
        Object.entries(options).forEach(([name, option]) => {
            this.program.option(name, option.description, option.defaultValue);
        });
        return this;
    }
    parseArgs() {
        this.program.parse(process.argv);
        return this;
    }
}

const app = new App({ program, inquirer, chalk });

export {
    App,
    app,
};



