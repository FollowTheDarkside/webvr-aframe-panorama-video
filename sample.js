window.addEventListener('load', init, false);

function init() {
    console.log("Init...");

    let scene = document.querySelector("a-scene");
    let video = document.getElementById("video");
    let box = document.getElementById("text-box");

    // When text-box clicked
    box.addEventListener('click', () => {
        if (scene.hasLoaded && video.paused){
            box.classList.toggle("change");
            video.play();
        }
    });

    if (scene.hasLoaded) {
        console.log("Scene loaded...");
        changeText();
    } else {
        scene.addEventListener("loaded", changeText);
    }

    function changeText() {
        document.getElementById("text").innerHTML = "Tap to start";
    }
}

