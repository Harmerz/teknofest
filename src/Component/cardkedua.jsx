// import React from "react";
// import '../Style/Card.css'
// import Grafik from "./Data/grafik";

// const CardKedua = (CardProps) => {
//     return(
//         <div class="card-kedua">

//                 <Grafik Isidata={CardProps.Isidata} Updatedata={CardProps.Updatedata} />
//         </div>
//     )
// }
// export default CardKedua;


import React,{Component} from "react";
import '../Style/Card.css'
import Grafik from "./Data/grafik";

class CardPertama extends Component {
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
        <div class="card-kedua">
             <div className="flex-row header">
            <div className="flex-row header-penjelasan">
                <img src={this.props.Logo} height="25px" alt="logo" />
                <span className="nama">
                    {this.props.Nama}
                </span>
            </div>
            <div className="text">
                {this.props.Updatedata[0]} {this.props.satuan}
            </div>
        </div>
            <div className="grafik-kedua">
                <Grafik Isidata={this.props.Isidata} Updatedata={this.state.full}  />
            </div>
            </div>
      );
    }
  }




export default CardPertama;