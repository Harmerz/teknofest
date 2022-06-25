
import { render } from "@testing-library/react";
import { update } from "lodash";
import React,{Component} from "react";
import '../Style/Card.css'
import Grafik from "./Data/grafik";
import Altitude from '../SVG/Altitude.svg'

class Example extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data_1 : props.Updatedata[0],
        data_2 : props.Updatedata[1],
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
            full : this.props.Updatedata,
        });
        }
    render() {
      return (
        <div class="card-pertama">
                <div>
                    <div className="flex-row header">
                        <div className="flex-row header-penjelasan">
                            <img src={Altitude} height="20px" alt="logo"/>
                            <span className="nama">
                                {this.state.full[0]}
                            </span>
                        </div>
                        <div className="updatedata">
                            {/* {this.state.data_2} */}
                        </div>  
                    </div>
                    <div className="grafik">
                        <Grafik Isidata={this.props.Isidata} Updatedata={this.state.full } />
                    </div>
                </div>
            </div>
      );
    }
  }




export default Example;