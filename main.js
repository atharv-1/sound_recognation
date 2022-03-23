function startSound(){
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("model.json",modelReady);
}
function modelReady(){
    console.log("model is ready");
}