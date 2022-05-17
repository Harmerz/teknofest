import React, {Component} from "react";
import '../Style/gps.css'
import { MapContainer, TileLayer, Circle} from 'react-leaflet'


const fillBlueOptions = { fillColor: 'blue' }
let a = -7.759029;
let b = 110.373108;


class GPS extends Component {
    constructor (props) {
    super(props);
    this.state = {
        lat: a,
        long:  b,
    }
    }


    componentDidMount() {
    setInterval(
        () => this.tick(),
        1000
    );
    }

    // componentWillUnmount() {
    //   clearInterval(this.timerID);
    // }

    tick() {
    this.setState({
        lat : this.state.lat + 0.0001,
        long : this.state.long + 0.0001,
    });
    }
    
    // let lat = 12;


    render(){
    // console.log([this.state.zoom]);
        return (
        <div id="gps">
            <MapContainer center={[this.state.lat, this.state.long]} zoom={18} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle center={[this.state.lat, this.state.long]} pathOptions={fillBlueOptions} radius={5} />
            </MapContainer>
        </div>
    );
    }
    
}


export default GPS;
