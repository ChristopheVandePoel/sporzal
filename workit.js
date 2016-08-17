 var hls = null;
 var timeoutId = null;
 var countDownId = null;
 var destructionText = document.getElementById("destructionText");
 
 // hls 304 workaround. See: https://github.com/dailymotion/hls.js/issues/615
 
 var config = {
  xhrSetup: function(xhr, url) {
    if (url.split('.').pop() == 'm3u8') {
      url = url.replace('m3u8', 'm3u8?rd=' + Math.random());
      xhr.open('GET', url, true); 
    }    
    if (url.indexOf('?rd=') > -1) {
      url = url.replace(/(rd=)[^\&]+/, 'rd=' + Math.random())
      xhr.open('GET', url, true); 
    }
  }, 
  debug:false
}
 
 // This is the main play function

 function playSporzaVid(id){
	var url = "http://ovpvrt1-live.hls.adaptive.level3.net/vrt/channel0" + id + "/1.m3u8"
	// console.log(url);
	// TODO: yeah. Maybe refactor this one.
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
			console.log('destroying');
			hls.destroy();
		}
		// console.log("creating new hls");

		var video = document.getElementById('video');
		hls = new Hls(config);
		
		hls.attachMedia(video);
		// console.log("twice?");
		hls.on(Hls.Events.MEDIA_ATTACHED,function(event, data){
			hls.loadSource(url);
			hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
				console.log("manifest loaded, found " + data.levels.length + " quality level");
				console.log('playing new video');
				video.play();
			});
		})
	}
 }

// Check if there is a video already set (usually means a refresh of the tab)

if (window.location.hash){
	playSporzaVid(window.location.hash.substring(1,2));
} else {
	playSporzaVid(1);
}
 
//
// Get all video links and add event handlers
//

var nodes = document.getElementsByClassName("streamLink");

function buttonHandler(event){
	//console.log(event)
	if(event.target && event.target.attributes) {
		playSporzaVid(parseInt(event.target.attributes["data-id"].value));
	}
	if(!timeoutId) {
		warnForDestruction();
	}
}

for (var i = 0; i < nodes.length; i++) {
	nodes[i].addEventListener("click", buttonHandler)
}

//
// this destroys the current hls instance
//

var stop = document.getElementById("stopLink");

function stopHandler() {
	if(hls){
		hls.destroy();
	}
}

stop.addEventListener("click", stopHandler);

//
// the next section defines the automatic stop
//

var stopButton = document.getElementById("destroyButton");

function processDestruction(){
	var setTime = parseInt(document.getElementById("setDestroyTime").value);
	if(timeoutId) {
		resetTimer(timeoutId);
	}
	if(setTime !== 0){
		displayCountdown(setTime);
		timeoutId = setTimeout(function(){
			console.log("Destruction initiated!");
			//stopHandler();
			timeoutId = null;
		}, setTime * 1000);
		console.log("Destruction set", timeoutId, setTime);
	}else {
		if(countDownId){
			resetCountDown(countDownId, true);
		}
	}
}

function displayCountdown(countDownTime){
	if(countDownId){
		resetCountDown(countDownId);
	}
	destructionText.innerHTML = "Video will stop in: " + countDownTime;
	destructionText.classList.remove("showMeRed");
	countDownId = setInterval(function(){
		countDownTime--;
		if(countDownTime == 0){
			destructionText.innerHTML = "Video stopped. Bandwidth safe!";
			resetCountDown(countDownId);
		} else{
			destructionText.innerHTML = "Video will stop in: " + countDownTime;
		}
	}, 1000);
}

function resetCountDown(countDownId, stopflag = false){
	clearTimeout(countDownId);
	countDownId = null;
	if (stopflag){
		warnForDestruction()	
	}
}

function resetTimer(timeoutId){
	clearTimeout(timeoutId);
	timeoutId = null;
	console.log("Destruction avoided, for now");
}

function warnForDestruction(){
	destructionText.innerHTML = "Automatic stop is not set, mind your bandwidth!";
	destructionText.classList.add("showMeRed");
}

stopButton.addEventListener("click", processDestruction);