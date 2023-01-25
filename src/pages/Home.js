import React, { Component } from "react";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ease:"easeIn",duration:.5}} className="text-2xl md:text-5xl mb-3">HI,I'am <span className="text-textbase">Dheeraj</span></motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ease:"easeIn",duration:1}} className="text-xl md:text-xl mb-3">swipe to interact</motion.div>
      <Link className="btn bg-base hover:bg-navbar text-textbase"to="/about">about me</Link>
    </div>
    </>
    );
  }
}

export default Home;