/**
 * A Simplified Analytic Attitude Determination Algorithm
 * using Accelerometer and Magnetometer on micro:bit.
 * 
 * It's like magic! This algorithm turns raw data into accurate and efficient quaternion estimations,
 * transforming your projects and making you go, "Wow!" Using the handy micro:bit, it feels like trying
 * out quaternions is pure magic. AccelMagiQ brings a touch of enchantment to the technical world.
 * We hope this helps you in your learning journey and sparks your curiosity about the fascinating
 * world of quaternions.
 * 
 * "AccelMagiQ" refers to this amazing algorithm that combines accelerometer and magnetometer data to
 * create precise quaternion calculations. It's a playful blend of 'acceleration', 'magnetometer', and 'magic' with
 * quaternions ('Q'), making advanced concepts seem like magic!
 */
//% block="AccelMagiQ"
//% weight=95 color=#4b0082 icon="\uf1d8"
//% groups="['Quaternion', 'EulerAngles', 'Sensor', 'Service']"
namespace accelmagiq {

    /**
     * Starts the Bluetooth service for quaternion data transmission.
     * This function initializes the necessary Bluetooth services on the micro:bit to enable
     * real-time communication of quaternion data to connected devices.
     */
    //% block="start AccelMagiQ service"
    //% shim=accelmagiq::startService
    //% group="Service"
    //% weight=92
    export function startService(): void {
        return;
    }

    //% shim=accelmagiq::notifyData_
    function notifyData_(w10000: number, x10000: number, y10000: number, z10000: number): void {
        return;
    }

    /**
     * Prepares and sends quaternion data over Bluetooth.
     * This function takes an array of quaternion components, scales each component by 10000 for precision,
     * and calls the low-level notifyData_ function to transmit the data.
     *
     * @param q - An array containing the quaternion components [w, x, y, z].
     */
    //% block="notify data %q"
    //% group="Service"
    //% weight=90
    export function notifyData(q: number[]): void {
        if (4 != q.length) {
            return;
        }
        const w10000 = 10000 * q[0];
        const x10000 = 10000 * q[1];
        const y10000 = 10000 * q[2];
        const z10000 = 10000 * q[3];
        notifyData_(w10000, x10000, y10000, z10000);
    }
}
