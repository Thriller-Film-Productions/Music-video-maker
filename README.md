# Music video maker

This website will let you make music videos by controlling a bunch of dots with your mouse. BTW, this was inspired by an Android app called Particle Flow.

## How to use

Use the slider in the top left corner to change the amount of dots on the screen.
As soon as you upload a sound using the upload button, it will give you a second to prepare while it's loading, then it will start playing the song. You can click the reset button, or press R to randomize the position of the dots.

To record it, I highly reccomend [OBS](https://obsproject.com/)

### Making the dots dance themselves

The fourth menu item, the one set to 120, is the BPM of the song. The fifth menu item sets the delay for when to make the dots start in milliseconds. The sixth menu item sets the forces to apply to the dots every beat, it's formatted like this:

x   y<br>
1, 0  Beat one<br>
0, 1  Beat two<br>
-1, 0 Beat three<br>
0, -1 Beat four<br>

This pattern will make the dots move in a square.

You can also change the 4th text box to set the dots to travel randomly

### Controls

Left click to attract the dots to your mouse and right click to repel them.
