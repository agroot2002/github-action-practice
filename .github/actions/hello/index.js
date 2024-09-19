const core = require("@actions/core")
const github = require("@actions/github")

try {
    
    core.debug("Debug Message")
    core.error("Error Message")
    core.warning("Warning Message")

    const name = core.getInput("who_to_greet")

    console.log(`Hello ${name}`);

    const time = new Date()

    core.setOutput("time",time.toISOString())

    core.exportVariable("HELLO_TIME",time)

    core.startGroup("Log Github Context")
    console.log(JSON.stringify(github.context,null,2));
    core.endGroup()
    
} catch (error) {
    core.setFailed(error.message)
}