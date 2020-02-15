function resizeVideo(){

    var parallax_div = document.getElementsByClassName('ParallaxVideo')[0]
    var video = document.getElementsByTagName('video')[0]

    p_width = parallax_div.offsetWidth
    v_height = video.offsetHeight

    video.style.width = String(p_width)+'px'
    parallax_div.style.height = String(v_height)+'px'

    console.log("video.style.width: "+video.style.width)
    console.log("parallax_div.style.height: "+parallax_div.style.height)


}

// When you resize the screen, resize the Parallax <div> and the <video> tag.
window.addEventListener('resize', resizeVideo);

// video and when it finished loading run the resizeVideo function


// Call resizeVideo() once every second for 10 seconds
// After trying quickly before 1 second has passed

window.onload = function(){
    setTimeout(resizeVideo, 250) // milliseconds
    setTimeout(resizeVideo, 500) // milliseconds
    setTimeout(resizeVideo, 1000) // milliseconds
    setTimeout(resizeVideo, 2000) // milliseconds
    setTimeout(resizeVideo, 3000) // milliseconds
    setTimeout(resizeVideo, 4000) // milliseconds
    setTimeout(resizeVideo, 5000) // milliseconds
    setTimeout(resizeVideo, 6000) // milliseconds
    setTimeout(resizeVideo, 7000) // milliseconds
    setTimeout(resizeVideo, 8000) // milliseconds
    setTimeout(resizeVideo, 9000) // milliseconds
    setTimeout(resizeVideo, 10000) // milliseconds
}
