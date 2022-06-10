import React, { Component } from "react";
// import ReactDOM from "react-dom";
import * as THREE from 'three';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import Grafik from "./Data/grafik";
import '../Style/gyro.css';
import { ZAxis } from "recharts";

const style = {
    width: 347,
    height: 365,
    // background: red,
};

class TigaDimensi extends Component {
    componentDidMount() {
        this.sceneSetup();
        this.addLights();
        this.loadTheModel();
        this.startAnimationLoop();
        // window.addEventListener('resize', this.handleWindowResize);
    }

    sceneSetup = () => {
        // get container dimensions and use them for scene sizing
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            55, // fov = field of view
            width / height, // aspect ratio
            0.1, // near plane
            1000 // far plane
        );
        this.camera.position.z = 500; // is used here to set some distance from a cube that is located at z = 0
        // OrbitControls allow a camera to orbit around the object
        // https://threejs.org/docs/#examples/controls/OrbitControls
        // this.controls = new OrbitControls( this.camera, this.mount );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( width, height );
        this.mount.appendChild( this.renderer.domElement ); // mount using React ref
    };

    // Code below is taken from Three.js OBJ Loader example
    // https://threejs.org/docs/#examples/en/loaders/OBJLoader
    loadTheModel = () => {
        // instantiate a loader
        this.scene.background = new THREE.Color( 0xE9ECEB );
        const loader = new GLTFLoader();
        const modelLh = new THREE.Object3D();
        
        // var scene = new THREE.Scene(); // initialising the scene
        // this.scene.background = new THREE.Color( 0xFFFFFF);
        // load a resource
        loader.load(
            // resource URL relative to the /public/index.html of the app
            'Test_payload.gltf',
            // called when resource is loaded
            ( gltf ) => {
                // this.scene.add(gltf.scene);
                const box = new THREE.Box3( ).setFromObject( gltf.scene );
                const c = box.getCenter( new THREE.Vector3( ) );
                const size = box.getSize( new THREE.Vector3( ) );
                gltf.scene.position.set( -c.x, ((size.y / 2) - c.y)-50, -c.z ); // center the gltf scene
                modelLh.add( gltf.scene );
                modelLh.rotateX(90*Math.PI/180);
                const axesHelper = new THREE.AxesHelper( 500 );
                // this.scene.add( axesHelper );
                this.scene.add( modelLh );
                const el = this.scene.getObjectByName("");
                this.model = el;
                // var x = 180;
                // this.scene.rotateX(x*Math.PI/180);//rotate degree to radians just change the x axis
                console.log(this.scene.rotation.z);
            },
        );
    };

    // adding some lights to the scene
    addLights = () => {
        const lights = [];

        // set color and intensity of lights
        lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

        // place some lights around the scene for best looks and feel
        lights[ 0 ].position.set( 0, 2000, 0 );
        lights[ 1 ].position.set( 1000, 2000, 1000 );
        lights[ 2 ].position.set( - 1000, - 2000, - 1000 );

        this.scene.add( lights[ 0 ] );
        this.scene.add( lights[ 1 ] );
        this.scene.add( lights[ 2 ] );
    };

    startAnimationLoop = () => {

        this.scene.rotateY(0.005);
        this.scene.rotateX(0.005);
        this.scene.rotateZ(0.005);
        // console.log(this.scene.rotateZ);

        this.renderer.render( this.scene, this.camera );

        // The window.requestAnimationFrame() method tells the browser that you wish to perform
        // an animation and requests that the browser call a specified function
        // to update an animation before the next repaint
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    handleWindowResize = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.renderer.setSize( width, height );
        this.camera.aspect = width / height;

        // Note that after making changes to most of camera properties you have to call
        // .updateProjectionMatrix for the changes to take effect.
        this.camera.updateProjectionMatrix();
    };

    render() {
        return <div style={style} ref={ref => (this.mount = ref)} />;
    }
}

const Gyro = (Props) => {
    return (
        <div id="gyro" className="flex-row">
            
            <div id="grafikgyro">
                <Grafik Isidata={Props.Isidata} Updatedata={Props.Updatedata}/>
            </div>
            <TigaDimensi/>
        </div>
    );
}


export default Gyro;