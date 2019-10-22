const THREE = require('three');
const OrbitControls = require('three-orbitcontrols')
const GLTFLoader = require('three-gltf-loader');


const chairOne = () => {
  const canvas = document.getElementById('canvas')


  let scene, camera, renderer;
  const init = () => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    camera = new THREE.PerspectiveCamera(50, canvas.offsetWidth / canvas.offsetHeight, 1, 1000);
    camera.position.x = 120;
    camera.position.y = 50;
    camera.position.z = 150;
    camera.updateProjectionMatrix();
    controls = new OrbitControls(camera, canvas);
    controls.maxPolarAngle = Math.PI / 2;
    hlight = new THREE.AmbientLight(0x404040, 9);
    var light = new THREE.PointLight(0xfffff, 5, 100);
    light.position.set(0, 50, 30);
    scene.add(light);
    scene.add(hlight);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
    document.getElementById('canvas').appendChild(renderer.domElement);
    let loader = new GLTFLoader();
    loader.load('./models/chairOne/scene.gltf', (gltf) => {
      car = gltf.scene.children[0];
      car.position.y = -25;
      car.scale.set(0.9, 0.9, 0.9);
      scene.add(gltf.scene);
      animate();
    });
  }
  const animate = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);

  }
  init();
}
chairOne()

const chairTwo = () => {
  const canvas = document.getElementById('canvas2')

  let scene, camera, renderer;
  const init = () => {
    scene = new THREE.Scene();

    scene.background = new THREE.Color(0xFFFFFF);
    camera = new THREE.PerspectiveCamera(50, canvas.offsetWidth / canvas.offsetHeight, 1, 1000);
    camera.position.x = -100;
    camera.position.y = 50;
    camera.position.z = 120;
    camera.updateProjectionMatrix();
    controls2 = new OrbitControls(camera, canvas);
    controls2.maxPolarAngle = Math.PI / 2;
    hlight = new THREE.AmbientLight(0x404040, 7);
    var light = new THREE.PointLight(0x404040, 10, 100);
    light.position.set(0, 50, 30);
    scene.add(light);
    scene.add(hlight);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    document.getElementById('canvas2').appendChild(renderer.domElement);
    let loader = new GLTFLoader();
    loader.load('./models/chairTwo/scene.gltf', (gltf) => {
      car = gltf.scene.children[0];
      car.position.y = -28;
      car.scale.set(0.9, 0.9, 0.9);
      scene.add(gltf.scene);
      animate();
    });
  }
  const animate = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);

  }
  init();
}
chairTwo()
