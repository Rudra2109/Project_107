function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true})
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/GPC5vK_k9/model.json'
    ,modelReddy);
}