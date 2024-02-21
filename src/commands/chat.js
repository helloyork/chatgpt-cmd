

/**@param {import("../cli.js").App} app */
export default async function main(app) {
    console.log(app.config.debug);
    console.log(app.config);
    console.log("hello world!");
    let res = await app.App.UI.confirm("Are you sure?");
    console.log(res);
}
