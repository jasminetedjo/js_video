var video = document.querySelector("#player1");

// Page Load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.pause();
	video.loop = false;
});

//Play Button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

//Pause Button
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
});

//Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	console.log(video.playbackRate *= 0.90);
	
});

//Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	console.log(video.playbackRate /= 0.90);
	
});

//Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		console.log(video.currentTime = 0);
	} else {
		console.log(video.currentTime += 10);
	}

	
});
//Mute

//Volume Slider

//Styled

//Original


