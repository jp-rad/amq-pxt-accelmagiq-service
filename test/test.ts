/**
 * tests go here; this will not be compiled when this package is used as an extension.
 */
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    accelmagiq.notifyData([
        1,
        0,
        0,
        0
    ])
})
input.onButtonPressed(Button.B, function () {
    accelmagiq.notifyData([
        0.11,
        0.24,
        0.14,
        0.95
    ])
})
accelmagiq.startService()
