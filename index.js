const keybindings = require("./lib/keybindings")
const { getWindowListSync, windowMoveResizeSync, } = require("wmctrljs")

exports.listShortcutKeys = keybindings.keys
exports.getShortcutKeyValue = keybindings.getShortcutKeyValue
exports.setShortcutKeyValue = keybindings.setShortcutKeyValue
exports.listWindow = getWindowListSync
exports.moveResizeWindow = windowMoveResizeSync