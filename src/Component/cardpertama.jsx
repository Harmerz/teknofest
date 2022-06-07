
import React,{Component} from "react";
import '../Style/Card.css'
import Grafik from "./Data/grafik";
var Coba;
const CardPertama = (Props) =>{
    // extend = Props.Updatedata;
        return(
            <div class="card-pertama">
                <div>
                    <div className="flex-row header">
                        <div className="flex-row header-penjelasan">
                            {/* <object data={Props.Logo} type="" height='21px' width='21px'></object> */}
                            {/* <div id="tulisan">PRESSURE</div> */}
                        </div>
                        <div className="updatedata">
                             {/* <UpdateData test={Props.UpdateData} /> */}
                        </div>  
                    </div>
                    <div className="grafik">
                        <Grafik Isidata={Props.Isidata} Updatedata={Props.Updatedata} />
                    </div>
                </div>
                
            </div>
        );
}

class UpdateData extends Component {

  


    // const test = () = 

    constructor (props) {
    super(props);
    this.state = {
        satu : Coba.test[0],
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
        satu : Coba.test[0],
    });
    }
    
    // let lat = 12;

    // -7.759029; 110.373108;
    render(){
    // console.log([this.state.container_zoom]);
        return (
            <div>
                {this.state.satu}
            </div>
    );
    }
    
}



export default CardPertama;