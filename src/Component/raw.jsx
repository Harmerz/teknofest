import { render } from "@testing-library/react";
import React, {Component} from "react";
import '../Style/raw.css'
import { raw_data } from "./Data/raw";
import RawLogo from '../SVG/Raw.svg';
class Raw extends Component{
    constructor (props) {
        super(props);
        this.state = {
            data : raw_data.toString(),
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
            data : raw_data.toString(),
        });
        }



    render(){
        return(
            <div id="raw">
                <div className="header-raw flex-row">
                    <img src={RawLogo} height="25px" alt="Logo" className="logo-raw"/>
                    <div className="tulisan-raw">
                        RAW DATA
                    </div>
                </div>
                <div className="Isiandata">{this.state.data}</div>
            </div>
        );
    }
}
export default Raw;