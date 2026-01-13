const image = document.getElementById("clickImage");

const items = [
    {
        img: "image/Mond-open-en-breed.png",
    },
    {
        img: "image/Mond-meer-dicht.png",
        audio: "audio/voice-changer-260113-154324.mp3"
    },
    {
        img: "image/Mond-open.png",
        audio: "audio/voice-changer-260113-154533.mp3"
    },
    { img: "image/Mond-omhoog.png",
       audio: "audio/voice-260113-152349.mp3" 
    }
];

let currentIndex = 0;
let currentAudio = null;

image.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentIndex = (currentIndex + 1) % items.length;

    image.src = items[currentIndex].img;

    currentAudio = new Audio(items[currentIndex].audio);
    currentAudio.play();
});
