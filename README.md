# sporzal

A small chrome-extension that creates a video portal so you can circumvent the sporza website. I created it because the site kept crashing my video and I need RIO!

Pull and add the directory to chrome. Installing is only necessary when running locally, not if you install as an extension.


## limitations
Will only work for the high quality streams. You can change this by altering these:

url = "http://ovpvrt1-live.hls.adaptive.level3.net/vrt/channel01/1.m3u8";

to

url = "http://ovpvrt1-live.hls.adaptive.level3.net/vrt/channel01/2.m3u8";

And reloading the extension. 

Maybe I'll expand this, if it lasts outside the olympics. :)

##Known issues
- Sometimes the video doesn't load immediately after clicking the link. Just click it again. I'm not sure why this happens.
- this will (probably) not work outside belgium. Streams are free for Belgium, since its national television here
- the stream urls may change over time. I'll (maybe) update when that happens
 

## Disclaimer
I'm assuming this is legal, since the content is provided for free to everybody who can access it.

### Additional info
You can also run this locally, use: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en but I don't recommend it.

Dependencies: nodeJs

locally, run: 

```bash
npm install
node server.js
```

Go to localhost:3000
