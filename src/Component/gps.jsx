import React, {Component} from "react";
import '../Style/gps.css'
import { MapContainer, TileLayer,useMapEvents, CircleMarker} from 'react-leaflet'
import { isibagi } from "./Data/raw";
import MapLogo from '../SVG/map.svg';

const fillBlueOptions = { fillColor: '#96A0FF' }
const fillRedOptions = { fillColor: '#FF5252' }

//found our location
function LocationMarker(props) {
    const map = useMapEvents({
        click() {
            map.fitBounds(props.tes)
        },
      })
  
    return 0;
  }

class GPS extends Component {


    constructor (props) {
    super(props);
    this.state = {
        container_lat: 0,
        container_long:  0,
        payload_lat: 0,
        payload_long: 0,
        thisbound : [0,0,0,0],
        container_alt: 0,
        payload_alt: 0,
    }
    }


    componentDidMount() {
    setInterval(
        () => this.tick(),
        1000
    );
    }

    tick() {
    this.setState({
        container_lat: isibagi.gps2_latitude,
        container_long:  isibagi.gps2_longitude,
        payload_lat: isibagi.gps1_latitude,
        payload_long: isibagi.gps1_longitude,
        thisbound : [
                        [isibagi.gps2_latitude, isibagi.gps2_longitude],
                        [isibagi.gps1_latitude, isibagi.gps1_longitude]
                    ],
        container_alt: isibagi.gps2_altitude,
        payload_alt: isibagi.gps1_altitude,
    });
    }
    
    // let lat = 12;

    // -7.759029; 110.373108;
    render(){
    // console.log([this.state.container_zoom]);
        return (
        <div id="gps" className="flex-column">
            <div className="header-gps flex-row">
                <div className="header-penjelasan-gps flex-row  ">
                    <img src={MapLogo} height="30px" alt="logo" />
                    <div className="textpenjelasan">
                        GPS
                    </div>
                </div>
                <div className="container flex-column">
                    <div className="flex-row judul-circle">
                        <div className="circle"></div>
                        <div className="text-container">
                            CONTAINER
                        </div>
                    </div>
                    <div className="penjelasan-gps flex-row">
                        <div className="lat flex-column">
                            <div>
                                Lat
                            </div>
                            <div>
                                {this.state.container_lat}
                            </div>
                        </div>
                        <div className="long flex-column">
                            <div>
                                Long
                            </div>
                            <div>
                                {this.state.container_long}
                            </div>
                        </div>
                        <div className="alt flex-column">
                            <div>
                                Alt
                            </div>
                            <div>
                                {this.state.container_alt}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payload flex-column">
                    <div className="flex-row judul-circle">
                        <div className="circle-payload"></div>
                        <div className="text-container">
                            PAYLOAD
                        </div>
                    </div>
                    <div className="penjelasan-gps flex-row">
                        <div className="lat flex-column">
                            <div>
                                Lat
                            </div>
                            <div>
                                {this.state.payload_lat}
                            </div>
                        </div>
                        <div className="long flex-column">
                            <div>
                                Long
                            </div>
                            <div>
                                {this.state.payload_long}
                            </div>
                        </div>
                        <div className="alt flex-column">
                            <div>
                                Alt
                            </div>
                            <div>
                                {this.state.payload_alt}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="leaflef-container">
                 <MapContainer center={[38.399269, 33.711887]} zoom={12} scrollWheelZoom={true}  minZoom={6} maxZoom={16}>
                    <LocationMarker tes={this.state.thisbound}/>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    // change a folder maps
                    // url="./TuzGolu/{z}/{x}/{y}.png"
                    
                    //aksaray-ankara maps
                    // url="./Aksaray/{z}/{x}/{y}.png"

                    //online map
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <CircleMarker center={[this.state.container_lat, this.state.container_long]} fillOpacity="1" pathOptions={fillRedOptions}  color="#FF5252" radius={5} />
                    <CircleMarker center={[this.state.payload_lat, this.state.payload_long]} fillOpacity="1" pathOptions={fillBlueOptions} color="#96A0FF" radius={5} />
                </MapContainer>
            </div>
           
        </div>
    );
    }
    
}


export default GPS;
