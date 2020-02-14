function resizeVideo(){

    var parallax_div = document.getElementsByClassName('ParallaxVideo')[0]
    var video = document.getElementsByTagName('video')[0]

    p_width = parallax_div.offsetWidth
    v_height = video.offsetHeight

    video.style.width = String(p_width)+'px'
    //video.style.height = String(v_height)+'px'
    parallax_div.style.height = String(v_height)+'px'

}

window.addEventListener('resize', resizeVideo);



