import React, {Component, useState, useMemo} from "react";
import '../Style/gps.css'
import { MapContainer, TileLayer, Circle, useMap, useMapEvents, Marker, Popup, CircleMarker} from 'react-leaflet'
import { isibagi } from "./Data/raw";
import { set } from "lodash";


const fillBlueOptions = { fillColor: '#96A0FF' }
const fillRedOptions = { fillColor: '#FF5252' }




var a=-7.759029;
var b=110.373108;
// var a = isibagi.gps1_latitude;
setInterval(()=>{
    a=isibagi.gps1_latitude;
    b=isibagi.gps1_longitude;
    // 
},
1000
)


//found our location
function LocationMarker(props) {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
          map.locate()
        },
        locationfound(e) {
        //   setPosition(e.latlng)
          console.log(props.tes[1], 12)
          map.fitBounds(props.tes)
        },
      })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

class GPS extends Component {

  


    // const test = () = 

    constructor (props) {
    super(props);
    this.state = {
        container_lat: 0,
        container_long:  0,
        payload_lat: 0,
        payload_long: 0,
        thisbound : [0,0,0,0],
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
                    ]
    });
    }
    
    // let lat = 12;

    // -7.759029; 110.373108;
    render(){
    // console.log([this.state.container_zoom]);
        return (
        <div id="gps">
            <div className="container">
                <div>
                    CONTAINER
                </div>
                <div>
                    lat : {this.state.container_lat}
                </div>
                <div>
                    long {this.state.container_long}
                </div>
            </div>
            <MapContainer center={[a,b]} zoom={18} scrollWheelZoom={true}>
                <LocationMarker tes={this.state.thisbound}/>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <CircleMarker center={[this.state.container_lat, this.state.container_long]} fillOpacity="1" pathOptions={fillRedOptions}  color="#FF5252" radius={5} />
                <CircleMarker center={[this.state.payload_lat, this.state.payload_long]} fillOpacity="1" pathOptions={fillBlueOptions} color="#96A0FF" radius={5} />
            </MapContainer>
        </div>
    );
    }
    
}


export default GPS;
