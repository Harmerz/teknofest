import { render } from "@testing-library/react";
import React, {Component} from "react";
import '../Style/raw.css'
import { raw_data } from "./Data/raw";
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
        setInterval(
            () => 
            //   console.log(this.state.data.length),
              1000
        );
        }
        // setInterval(function() {
        //     console.log(this.state.data.length),
        // },1000)
        
        // componentWillUnmount() {
        //   clearInterval(this.timerID);
        // }
        
        tick() {
        this.setState({
            data : raw_data.toString(),
        });
        }



    render(){
        return(
            <div id="raw">
                <div className="Isiandata">{this.state.data}</div>
            </div>
        );
    }
}
export default Raw;