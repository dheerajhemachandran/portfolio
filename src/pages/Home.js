import React, { Component } from "react";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import { Link } from "react-router-dom";
class Home extends Component {
  componentDidMount() {

    var scene = new THREE.Scene();

    //light
    const light=new THREE.PointLight(0xffffff,1,100)
    light.position.set(10,10,10)
    scene.add(light)

    //camera
    var camera = new THREE.PerspectiveCamera(
      45,window.innerWidth/window.innerHeight,0.1,1000
    );
    camera.position.z = 20;

    // Create a sphere for the ball
    var ballGeometry = new THREE.SphereGeometry( 1, 64, 64 );
    var ballMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
    var ball = new THREE.Mesh( ballGeometry, ballMaterial );
    scene.add( ball );

    // Set the camera position and point it at the ball
    camera.position.z = 5;
    camera.lookAt( ball.position );

    //render
    var renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(2)
    this.mount.appendChild(renderer.domElement);

    //controls
    const controls=new OrbitControls(camera,this.mount)
    controls.enableDamping=true;
    controls.enablePan=false;
    controls.enableZoom=false;
    controls.autoRotate=true;
    controls.autoRotateSpeed=15;

    var animate = function() {
      requestAnimationFrame(animate);
    
      controls.update()
      camera.aspect=(window.innerWidth/window.innerHeight)
      renderer.setSize(window.innerWidth,window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();
  }
  render() {
    return (
    <>
    <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 z-0" ref={ref => (this.mount = ref)} />
    <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2">
      <div className="text-lg md:text-3xl mb-3">HI,I'am <span className="text-textbase">Dheeraj</span></div>
      <div className="md:text-xl mb-1">click to interact</div>
      <Link className="btn bg-base hover:bg-navbar text-textbase"to="/about">about me</Link>
    </div>
    </>
    );
  }
}

export default Home;