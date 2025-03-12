let LiveDemoButtons=document.getElementsByClassName("LiveDemo");

for(let i=0;i<LiveDemoButtons.length;i++){
    LiveDemoButtons[i].addEventListener("click",()=>{

        let p1=document.getElementById("LiveDemo1");
        let p2=document.getElementById("LiveDemo2");
        let p3=document.getElementById("LiveDemo3");

        let videoDiv = document.createElement("div");
        videoDiv.classList.add("videoDiv");

        let previewvideo=document.createElement("video");
        previewvideo.classList.add("previewvideo");
        previewvideo.controls=true;
        previewvideo.autoplay=true;

        if (i == 0) {
            previewvideo.src = "../Main Folder/LiveDemo/Human Benchmark - Google Chrome 12-Jan-25 5_58_54 PM.mp4";
        } else if (i == 1) {
            previewvideo.src = "../Main Folder/LiveDemo/Human Benchmark - Google Chrome 12-Jan-25 5_58_54 PM.mp4";
        } else {
            previewvideo.src = "../Main Folder/LiveDemo/Human Benchmark - Google Chrome 12-Jan-25 5_58_54 PM.mp4";
        }

        let closeButton = document.createElement("button");
        closeButton.innerHTML="Close";
        closeButton.classList.add("closeButton");

        closeButton.addEventListener("click", () => {
            document.body.removeChild(videoDiv);
        });

        videoDiv.appendChild(previewvideo);
        videoDiv.appendChild(closeButton);
        document.body.appendChild(videoDiv);
    })
}