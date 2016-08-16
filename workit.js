 var hls = null;
 
 function playSporzaVid(id){
	var url = "http://ovpvrt1-live.hls.adaptive.level3.net/vrt/channel0" + id + "/1.m3u8"
	// console.log(url);
	
	switch (id){
		case 1:
			url = "http://ovpvrt1-live.hls.adaptive.level3.net/vrt/channel01/1.m3u8";
			break;
		case 2:
			url = "http://ovpvrt2-live.hls.adaptive.level3.net/vrt/channel02/1.m3u8";
			break;
		case 3:
			url = "http://ovpvrt3-live.hls.adaptive.level3.net/vrt/channel03/1.m3u8";
			break;
		case 4:
			url = "http://ovpvrt4-live.hls.adaptive.level3.net/vrt/channel04/1.m3u8";
			break;
		case 5:
			url = "http://live.stream.vrt.be/vrt_sporza_live/_definst_/smil:vrt_sporza_live.smil/chunklist_w494123392_b1296000.m3u8";
			break;
		case 6:
			url = "http://live.stream.vrt.be/vrt_events1_live/_definst_/smil:vrt_events1_live.smil/chunklist_w143725990_b1296000.m3u8";
			break;
	}
	
	if(Hls.isSupported()) {
		if(hls){
			hls.destroy();
		}
		hls = new Hls();
		hls.loadSource(url);
		hls.attachMedia(video);
		hls.on(Hls.Events.MEDIA_ATTACHED,function(){
			console.log('playing new video');
			video.play();
		})
	}
 }
 
if(Hls.isSupported()) {
	console.log("Setting Hls event handlers");
	var video = document.getElementById('video');
}

 if (window.location.hash){
	playSporzaVid(window.location.hash.substring(1,2));
 }else {
	playSporzaVid(1);
 }
 
 function buttonHandler(event){
	console.log(event)
	if(event.target && event.target.attributes) {
		playSporzaVid(parseInt(event.target.attributes["data-id"].value));
	}
}
 
var nodes = document.getElementsByClassName("streamLink");
 
for (var i = 0; i < nodes.length; i++) {
	nodes[i].addEventListener("click", buttonHandler)
}