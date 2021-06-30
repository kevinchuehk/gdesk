const { spawnSync, spawn } = require("child_process")
const transformOutputToArray = output => {
    if (output === null || output === undefined) {
        return []
    }

    return output.toString().split("\n").filter((value) => {
        return value !== ""
    })
}

const process = spawnSync("gsettings", ["list-keys", "org.gnome.desktop.wm.keybindings"])
const keys = transformOutputToArray(process.stdout)

exports.keys = keys
exports.getShortcutKeyValue = keyId => {
    const process = spawnSync("gsettings", ["get", "org.gnome.desktop.wm.keybindings", keyId])
    if (process.stdout === null || process.stdout === undefined) return ""
    return process.stdout.toString()
}

exports.setShortcutKeyValue = (keyId, value) => {
    const process = spawnSync("gsettings", ["set", "org.gnome.desktop.wm.keybindings", keyId, value])
    const exitCode = process.status
    return exitCode === 0
}
