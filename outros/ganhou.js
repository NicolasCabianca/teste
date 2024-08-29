var nivel = localStorage.getItem("nivel")

function trocarNivel(){
    if(nivel == 3){
        window.location = "index.html"
    }else{
        window.location = "index.html"
    }
}
var sGanhou
function preload() {
    sGanhou = loadSound("Sganhou.mp3")
}
function setup() {
    video = createVideo("DEV.mp4")
video.size(500,400)
video.showControls()
    
    sGanhou.loop()
    sGanhou.setVolume(0.1)

}
