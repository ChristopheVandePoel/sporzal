# Sporzal

A small chrome-extension that creates a video portal so you can circumvent the sporza website. I created it because the site kept crashing my video and I need RIO!

Find & download it on the store:

https://chrome.google.com/webstore/detail/sporza-rio-player-portal/dmcgcenpoblhoonalabklddclcdgpmpe

## Usage

It's pretty straightforward. You get a button top-right that you can click and it will open the portal. Beneath the video are all the known possible sporza video's. Just click to view.

The video's are high quality, so they take on a lot of bandwidth. You can set a timer that will stop them playing after a number of defined minutes.

## Limitations
Will only work for the high quality streams. You can change this by altering these:

url = "http://ovpvrt1-live.hls.adaptive.level3.net/vrt/channel01/1.m3u8";

to

url = "http://ovpvrt1-live.hls.adaptive.level3.net/vrt/channel01/2.m3u8";

And reloading the extension. 

Maybe I'll expand this, if it lasts outside the olympics. :)

## Known issues
- this will (probably) not work outside Belgium. Streams are free for Belgium, since its national television here
- the stream urls may change over time. I'll (maybe) update when that happens
 

## Disclaimer
I'm assuming this is legal, since the content is provided for free to everybody who can access it.

## Use this repo

This repo will (for now) pretty much run in sync with the store version, so you might as well download it there. But if you want to get it anyway:

Pull/download and unzip somewhere if needed. Add this directory in your chrome extensions (you will need to have developer mode turned on for that). Npm installing is only necessary when running locally, not if you install as an extension. (see below)

### Additional info

(the following might no longer be true after updates:)
You can also run this locally, use: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en but I don't recommend it.

Dependencies: nodeJS

locally, run: 

```bash
npm install
node server.js
```

Go to localhost:3000