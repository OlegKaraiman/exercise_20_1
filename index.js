// eslint-disable-next-line no-undef
const scene = new THREE.Scene();

const fov = 70;
const aspectRatio = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;
// eslint-disable-next-line no-undef
const camera = new THREE.PerspectiveCamera(fov, aspectRatio,near, far);

// eslint-disable-next-line no-undef
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#ccc');
document.body.prepend(renderer.domElement);

// eslint-disable-next-line no-undef
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// eslint-disable-next-line no-undef
const geometry = new THREE.ConeGeometry('9', '15', '8');
// eslint-disable-next-line no-undef
const material = new THREE.MeshPhongMaterial({ color: '#2E86C1' }
);
// eslint-disable-next-line no-undef
const cone = new THREE.Mesh(geometry, material);
cone.scale.set('4', '4', '4');
cone.rotation.x = 2;
cone.rotation.z = 4;
scene.add(cone);

controls.update();

camera.position.z = 85;

const color = '#fff';
const intensity = 1.5;

// eslint-disable-next-line no-undef
const light = new THREE.DirectionalLight(color, intensity);

light.position.set('-2', '1', '2');
scene.add(light);
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    controls.update();
}

animate();