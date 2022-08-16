import React, { Component } from "react";
import * as THREE from 'three';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import Grafik from "./Data/grafik";
import '../Style/gyro.css';
import GyroLogo from '../SVG/Gyro.svg';
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";




// FPS
var fps = 15;
const style = {
    width: 347,
    height: 365,
};


var fpsInterval = 1000/fps;
var frameCount = 0;
var startTime, now, then, elapsed;



export class TigaDimensi extends Component {
    constructor (props) {
        super(props);
        this.state = {
          cetak:"0",
          refresh:"",
        }
        }
    
    componentDidMount() {
        
        this.sceneSetup();
        this.addLights();
        this.loadTheModel();
        
        this.draw();
        // window.addEventListener('resize', this.handleWindowResize);
    }

    sceneSetup = () => {
        this.xAwal = 0;
        this.yAwal = 0;
        this.zAwal = 0;
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
        loader.setMeshoptDecoder(MeshoptDecoder);
        // load a resource
        loader.load(
            // resource URL relative to the /public/index.html of the app
            'scene.glb',
            // called when resource is loaded
            ( gltf ) => {
                // this.scene.add(gltf.scene);
                const box = new THREE.Box3( ).setFromObject( gltf.scene );
                const c = box.getCenter( new THREE.Vector3( ) );
                const size = box.getSize( new THREE.Vector3( ) );
                gltf.scene.position.set( -c.x, ((size.y / 2) - c.y)-50, -c.z ); // center the gltf scene
                modelLh.add( gltf.scene );
                modelLh.rotateX(90*Math.PI/180);
                // const axesHelper = new THREE.AxesHelper( 500 );

                // this.scene.add( axesHelper );
                this.scene.add( modelLh );
                const el = this.scene.getObjectByName("");
                this.model = el;
                // var x = 180;
                // this.scene.rotateX(x*Math.PI/180);//rotate degree to radians just change the x axis
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

    draw = () => {
        var today = new Date();
        then = today.getTime();
        startTime = then;
        // console.log(startTime);
        this.startAnimationLoop();

    }
    
    startAnimationLoop = () => {
        
        requestAnimationFrame(this.startAnimationLoop);
        var today = new Date();
        now = today.getTime();
        elapsed = now - then;
       
        if (elapsed > fpsInterval) {
            var xtemp;
            var ytemp;
            var ztemp;
            // console.log("hrllo");
            // console.log(elapsed);
            var sinceStart = now - startTime;
            var currentFps = (1000 / (sinceStart / ++frameCount) * 100) / 100;
            var fixedFPS = currentFps.toFixed(2)
            then = now - (elapsed % fpsInterval);
            this.setState({
                cetak : String(fixedFPS) + " fps.",
            });
            // i++;
            // catat[today.getSeconds()] = i;
            // console.log(catat[today.getSeconds()]-catat[today.getSeconds()-1]);
            if(this.props.Updatedata[0] === undefined){
                this.props.Updatedata[0] = 0;
            }
            if(this.props.Updatedata[1] === undefined){
                this.props.Updatedata[1] = 0;
            }
            if(this.props.Updatedata[2] === undefined){
                this.props.Updatedata[2] = 0;   
            }
            let x = ((this.props.Updatedata[1] - this.xAwal)/currentFps);
            let y = ((this.props.Updatedata[0] - this.yAwal)/currentFps);
            let z = ((this.props.Updatedata[2] - this.zAwal)/currentFps);
            // console.log(catat[isibagi.packet-1]);
            this.scene.rotateX(x*Math.PI/180);
            this.scene.rotateY(y*Math.PI/180);
            this.scene.rotateZ(z*Math.PI/180);

            this.renderer.render( this.scene, this.camera );
            this.xAwal += x;
            this.yAwal += y;
            this.zAwal += z;
            
            if(this.xAwal % 360 > 180){
                xtemp = (this.xAwal % 360) - 360;
            }else if(this.xAwal % 360 < -180){
                xtemp = (this.xAwal % 360) + 360;
            }else{
                xtemp = (this.xAwal % 180);
            }
         
            //for y axis
            if(this.yAwal % 360 > 180){
                ytemp = (this.yAwal % 360) - 360;
            }else if(this.yAwal % 360 < -180){
                ytemp = (this.yAwal % 360) + 360;
            }else{
                ytemp = (this.yAwal % 180);
            }

            //for z axis
            if(this.zAwal % 360 > 180){
                ztemp = (this.zAwal % 360) - 360;
            }else if(this.zAwal % 360 < -180){
                ztemp = (this.zAwal % 360) + 360;
            }else{
                ztemp = (this.zAwal % 180);
            }

            if((this.scene.rotation.x*180/Math.PI).toFixed(3) !== xtemp.toFixed(3)){
                this.scene.rotation.x = xtemp;
                this.setState({
                    refresh : "Gyro Berbeda, Tolong Refresh",
                });
            }
            if((this.scene.rotation.y*180/Math.PI).toFixed(3) !== ytemp.toFixed(3)){
                this.scene.rotation.y = ytemp;
                this.setState({
                    refresh : "Gyro Berbeda, Tolong Refresh",
                });
            }
            if((this.scene.rotation.z*180/Math.PI).toFixed(3) !== ztemp.toFixed(3)){
                this.scene.rotation.z = ztemp;
                this.setState({
                    refresh : "Gyro Berbeda, Tolong Refresh",
                });
            }
        }
        // slowly rotate an object
        

        // The window.requestAnimationFrame() method tells the browser that you wish to perform
        // an animation and requests that the browser call a specified function
        // to update an animation before the next repaint
        
        // if(this.props.Updatedata[0] === undefined || this.props.Updatedata[1] === undefined || this.props.Updatedata[2] === undefined || Number.isNaN(this.props.Updatedata[0]) || Number.isNaN(this.props.Updatedata[1]) ||Number.isNaN(this.props.Updatedata[2])){
            
        // }else{
            // let x = 10;
            // let y = 10;
            // let z = 10;
            
            // if(this.props.Updatedata[0] === undefined){
            //     this.props.Updatedata[0] = 0;
            // }
            // if(this.props.Updatedata[1] === undefined){
            //     this.props.Updatedata[1] = 0;
            // }
            // if(this.props.Updatedata[2] === undefined){
            //     this.props.Updatedata[2] = 0;
            // }
            // let x = (this.props.Updatedata[0] - this.xAwal);
            // let y = (this.props.Updatedata[1] - this.yAwal);
            // let z = (this.props.Updatedata[2] - this.zAwal);
            // this.xAwal = this.props.Updatedata[0];
            // this.yAwal = this.props.Updatedata[1];
            // this.zAwal = this.props.Updatedata[2];



            // this.scene.rotateX(x*Math.PI/180);
            // this.scene.rotateY(y*Math.PI/180);
            // this.scene.rotateZ(z*Math.PI/180);

            // // The window.requestAnimationFrame() method tells the browser that you wish to perform
            // // an animation and requests that the browser call a specified function
            // // to update an animation before the next repaint
        
            // this.renderer.render( this.scene, this.camera );
            // this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
        // }
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
        return (
            <div id="gyro3D">
                <p id="results">  FPS:{this.state.cetak}  {this.state.refresh}</p>
                <div id="3Dnya" style={style} ref={ref => (this.mount = ref)} />
                
            </div>
            
        );
    }
}

class Gyro extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data_1 : props.Updatedata[0],
          data_2 : props.Updatedata[1],
          data_3 : props.Updatedata[2],
          full : props.Updatedata,
        };
      }
      componentDidMount() {
          setInterval(
              () => this.tick(),
              1000
          );
          }
      tick() {
          this.setState({
              data_1 : this.props.Updatedata[0],
              data_2 : this.props.Updatedata[1],
              data_3 : this.props.Updatedata[2],
              full : this.props.Updatedata,
          });
          }
      render() {
        return (
            <div className="flex-column">
                <div className="flex-row header-gyro">
                    <div className="flex-row header-gyro-penjelasan">
                        <img src={GyroLogo} height="35px" alt="logo" />
                        <span className="nama-gyro">
                            GYROSCOPE
                        </span>
                    </div>
                    <div className="updatedata flex-column ">
                        <div className="yaw flex-row">
                            <div className="box-yaw"></div>
                            <div className="namebox">
                                Yaw
                            </div>
                        </div>
                        <div className="pitch flex-row">
                            <div className="box-pitch"></div>
                            <div className="namebox">
                                Pitch
                            </div>
                        </div>
                        <div className="roll flex-row">
                            <div className="box-roll"></div>
                            <div className="namebox">
                                Roll
                            </div>
                        </div>
                    </div>
                    <div className="flex-column">
                        <div className="text">
                            {this.props.Updatedata[0]}
                        </div>
                        <div className="text">
                            {this.props.Updatedata[1]}
                        </div>
                        <div className="text">
                            {this.props.Updatedata[2]}
                        </div>
                    </div>
                </div>
                <div className="flex-row">
                    <div id="grafikgyro">
                        <Grafik Isidata={this.props.Isidata} Updatedata={this.props.Updatedata}/>
                    </div>
                    
                </div>
            </div>
        );
      }
}


export default Gyro;