# sporzal

A small chrome-extension that creates a video portal so you can circumvent the sporza website. I created it because the site kept crashing my video and I need RIO!

Pull/download and unzip somewhere if needed. Add this directory in your chrome extensions (you will need to have developer mode turned on for that). Npm installing is only necessary when running locally, not if you install as an extension. (see below)


## limitations
Will only work for the high quality streams. You can change this by altering these:

url = "http://ovpvrt1-live.hls.adaptive.level3.net/vrt/channel01/1.m3u8";

to

url = "http://ovpvrt1-live.hls.adaptive.level3.net/vrt/channel01/2.m3u8";

And reloading the extension. 

Maybe I'll expand this, if it lasts outside the olympics. :)

##Known issues
- this will (probably) not work outside Belgium. Streams are free for Belgium, since its national television here
- the stream urls may change over time. I'll (maybe) update when that happens
 

## Disclaimer
I'm assuming this is legal, since the content is provided for free to everybody who can access it.

### Additional info

(the following might no longer be true after updates:)
You can also run this locally, use: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en but I don't recommend it.

Dependencies: nodeJs

locally, run: 

```bash
npm install
node server.js
```

Go to localhost:3000