Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera")
Webcam.attach('#camera');
function TakeSnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="CapturedImage" src="'+data_uri+'"/>';
});
}
console.log('ml5 version=',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/24kTBk2_M/model.json',modelLoaded);
    
function modelLoaded(){
console.log("modelLoaded");
}
function check(){
img=document.getElementById("CapturedImage");
classifier.classify(img,gotResult)
}
function gotResult(error,results){
if(error){
console.error(error)
}
else{
console.log(results)
document.getElementById("Result_Family").innerHTML=results[0].label;
document.getElementById("Result_Accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}