
> Open this page at GitHub Pages: [https://jp-rad.github.io/amq-pxt-accelmagiq-service/](https://jp-rad.github.io/amq-pxt-accelmagiq-service/)

## Quaternions with AccelMagiQ and micro:bit!

A Simplified Analytic Attitude Determination Algorithm
using Accelerometer and Magnetometer on micro:bit.

It's like magic! This algorithm turns raw data into accurate and efficient quaternion estimations,
transforming your projects and making you go, "Wow!" Using the handy micro:bit, it feels like trying
out quaternions is pure magic. AccelMagiQ brings a touch of enchantment to the technical world.
We hope this helps you in your learning journey and sparks your curiosity about the fascinating
world of quaternions.

"AccelMagiQ" refers to this amazing algorithm that combines accelerometer and magnetometer data to
create precise quaternion calculations. It's a playful blend of 'acceleration', 'magnetometer', and 'magic' with
quaternions ('Q'), making advanced concepts seem like magic!


- [https://github.com/jp-rad/amq-pxt-accelmagiq-estimator/](https://github.com/jp-rad/amq-pxt-accelmagiq-estimator/)
- [https://github.com/jp-rad/amq-pxt-accelmagiq-service/](https://github.com/jp-rad/amq-pxt-accelmagiq-service/)
- [https://github.com/jp-rad/amq-pxt-accelmagiq-math/](https://github.com/jp-rad/amq-pxt-accelmagiq-math/)
- [https://github.com/jp-rad/amq-weblueth-accelmagiq/](https://github.com/jp-rad/amq-weblueth-accelmagiq/)


> [DEMO (github pages) - https://jp-rad.github.io/amq-weblueth-accelmagiq/](https://jp-rad.github.io/amq-weblueth-accelmagiq/)


# Blocks preview

<!--
This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/jp-rad/amq-pxt-accelmagiq-service/raw/master/.github/makecode/blocks.png)
-->
![A rendered view of the blocks](https://github.com/jp-rad/amq-pxt-accelmagiq-service/raw/master/.github/statics/blocks.png)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/jp-rad/amq-pxt-accelmagiq-service** and import

```text
https://github.com/jp-rad/amq-pxt-accelmagiq-service
```

## Downloaded HEX file to Use as Extension

Released HEX file can be imported as an **extension** in MakeCode.

* open [https://github.com/jp-rad/amq-pxt-accelmagiq-service/releases](https://github.com/jp-rad/amq-pxt-accelmagiq-service/releases)
* download HEX file
* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* click on **Import File**
* select downloaded HEX file and click on **Go ahead!**

## Example

```blocks

let estimated: number[] = []
if (input.buttonIsPressed(Button.B)) {
    input.calibrateCompass()
}
accelmagiq.setCoordinateSystem(accelmagiq.CoordinateSystem.BASIC)
accelmagiq.setLowPassFilterAlpha(0.3)
basic.forever(function () {
    estimated = accelmagiq.estimate()
    accelmagiq.notifyData(estimated)
})

```

```js

let estimated: number[] = []
if (input.buttonIsPressed(Button.B)) {
    input.calibrateCompass()
}
accelmagiq.setCoordinateSystem(accelmagiq.CoordinateSystem.BASIC)
accelmagiq.setLowPassFilterAlpha(0.3)
basic.forever(function () {
    estimated = accelmagiq.estimate()
    accelmagiq.notifyData(estimated)
})

```

# ACCELMAGIQ Profile Report

<table>
<tr><td> ■</td><td>Name </td><td> ACCELMAGIQ Service  </td></tr>
<tr><td> 1</td><td>UUID </td><td> b9db3d01-cada-42b6-a36e-eda54d006627  </td></tr>
<tr><td> 2</td><td>Declaration </td><td> Primary  </td></tr>
<tr><td> 3</td><td>Requirement </td><td> Optional  </td></tr>
<tr><td> 4</td><td>Server Role </td><td>   </td></tr>
<tr><td> 5</td><td>Client Role </td><td>   </td></tr>
<tr><td> 6</td><td>Abstract: </td><td>   </td></tr>
<tr><td> 7</td><td>Summary: </td><td> Exposes quaternion data.<br>
A quaternion is a complex number system used to represent rotations in 3D space. Quaternions consist of four components: one scalar (w) and three vector components (x, y, z).<br>
<br>
Value contains fields which represent 4 separate quaternion measurements: w, x, y, and z components as 4 unsigned 16-bit values in that order and in little endian format.<br>
<br>
Data can be read on demand or notified periodically.  </td></tr>
<tr><td> 8</td><td>Examples: </td><td>   </td></tr>
<tr><td> ▼</td><td>CHARACTERISTICS </td><td> ACCELMAGIQ SERVICE - CHARACTERISTICS  </td></tr>
<tr><td> ■</td><td>Name </td><td> Quaternion Data  </td></tr>
<tr><td> 1</td><td>UUID </td><td> b9db3d40-cada-42b6-a36e-eda54d006627  </td></tr>
<tr><td> 2</td><td>Type </td><td>   </td></tr>
<tr><td> 3</td><td>Requirement </td><td> Mandatory  </td></tr>
<tr><td> 4</td><td>Abstract: </td><td>   </td></tr>
<tr><td> 5</td><td>Summary: </td><td> Contains quaternion measurements for w, x, y, and z components as 4 signed 16-bit values in that order and in little endian format. w, x, y, and z values should be divided by 1000.  </td></tr>
<tr><td> 6</td><td>Information: </td><td>   </td></tr>
<tr><td> 7</td><td>Examples </td><td>   </td></tr>
<tr><td> 8</td><td>Read </td><td> Mandatory  </td></tr>
<tr><td> 9</td><td>Write </td><td> Excluded  </td></tr>
<tr><td> 10</td><td>Write Without Response </td><td> Excluded  </td></tr>
<tr><td> 11</td><td>Signed Write </td><td> Excluded  </td></tr>
<tr><td> 12</td><td>Reliable Write </td><td> Excluded  </td></tr>
<tr><td> 13</td><td>Notify </td><td> Mandatory  </td></tr>
<tr><td> 14</td><td>Indicate </td><td> Excluded  </td></tr>
<tr><td> 15</td><td>Broadcast </td><td> Excluded  </td></tr>
<tr><td> 16</td><td>Writable Auxiliaries </td><td> Excluded  </td></tr>
<tr><td> 17</td><td>Extended Properties </td><td> Excluded  </td></tr>
<tr><td> 18</td><td>Fields </td><td> 1. ACCELMAGIQ_W : sint16<br>
2. ACCELMAGIQ_X : sint16<br>
3. ACCELMAGIQ_Y : sint16<br>
4. ACCELMAGIQ_Z : sint16  </td></tr>
<tr><td> 19</td><td>Descriptors </td><td> 1. Client Characteristic Configuration : 2902  </td></tr>
</table>


#### Metadata (used for search, rendering)

* for PXT/microbit

<script src="https://cdn.jsdelivr.net/gh/jp-rad/pxt-ubit-extension@0.5.0/.github/statics/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", [ "estimator=github:jp-rad/amq-pxt-accelmagiq-estimator", "service=github:jp-rad/amq-pxt-accelmagiq-service", "math=github:jp-rad/amq-pxt-accelmagiq-math", ]);</script>
