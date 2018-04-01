var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.01, 1000);

var renderer = Detector.webgl ? new THREE.WebGLRenderer({
    antialias: true
}) : new THREE.CanvasRenderer();

var blue = 0xC70039;
var yellow = 0x0c25d8;
var purple = 0x000000;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 48;

var tubeGeometry = new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
var ballGeometry = new THREE.SphereGeometry(0.8, 32, 32);
var blueMaterial = new THREE.MeshBasicMaterial({
    color: blue
});
var yellowMaterial = new THREE.MeshBasicMaterial({
    color: yellow
});
var purpleMaterial = new THREE.MeshBasicMaterial({
    color: purple
});

var dna = new THREE.Object3D();
var holder = new THREE.Object3D();


for (var i = 0; i <= 35; i++) {
    var blueTube = new THREE.Mesh(tubeGeometry, blueMaterial);
    blueTube.rotation.z = 90 * Math.PI / 180;
    blueTube.position.x = -2;

    var yellowTube = new THREE.Mesh(tubeGeometry, yellowMaterial);
    yellowTube.rotation.z = 90 * Math.PI / 180;
    yellowTube.position.x = 3;


    var ballRight = new THREE.Mesh(ballGeometry, purpleMaterial);
    ballRight.position.x = 6;
    var ballLeft = new THREE.Mesh(ballGeometry, purpleMaterial);
    ballLeft.position.x = -6;

    var row = new THREE.Object3D();
    row.add(blueTube);
    row.add(yellowTube);
    row.add(ballRight);
    row.add(ballLeft);

    row.position.y = i * 2;
    row.rotation.y = 10 * i * Math.PI / 180;

    dna.add(row);

};


dna.position.y = -40;

scene.add(dna);

dna.position.y = -30;
holder.add(dna)
scene.add(holder);
var render = function() {
    requestAnimationFrame(render);
    holder.rotation.x += 0.02;
    holder.rotation.y += 0.02;
    renderer.render(scene, camera);
}
render();