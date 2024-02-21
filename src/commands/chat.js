

/**@param {import("../cli.js").App} app */
export default async function main(app) {
    console.log(app.config);
    app.Logger.error("noooo!");
    app.Logger.debug("debugging...");
    app.Logger.info("info: " + app.UI.hex(app.UI.Colors.Red)("red") + " " + app.UI.hex(app.UI.Colors.Green)("green") + " " + app.UI.hex(app.UI.Colors.Blue)("blue"));
    app.Logger.log("log");
    let res = await app.UI.confirm("Are you sure?");
    console.log(res);
    res = await app.UI.select("Select one", ["one", "two", "three"]);
    console.log(res);
    res = await app.UI.checkbox("Select many", ["one", "two", "three"]);
    console.log(res);
    res = await app.UI.input("Enter something");
    console.log(res);
    res = await app.UI.password("Enter password");
    console.log(res);
}
