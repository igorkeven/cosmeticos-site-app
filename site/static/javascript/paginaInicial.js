function abrirModal() {
    const modal = document.getElementById('mirrorModal');
    modal.style.display = 'block';
    startWebcam();
}

function fecharModal() {
    const modal = document.getElementById('mirrorModal');
    modal.style.display = 'none';
    stopWebcam();
}

let stream;

function startWebcam() {
    const video = document.getElementById('webcamMirror');
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                video.srcObject = stream;
            })
            .catch((error) => {
                console.error('Erro ao acessar a webcam:', error);
            });
    }
}

function stopWebcam() {
    const video = document.getElementById('webcamMirror');
    const stream = video.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => track.stop());
    video.srcObject = null;
}




