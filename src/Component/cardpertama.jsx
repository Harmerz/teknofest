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
        maksimum : 20,
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
            maksimum : this.state.maksimum + 1,
        });
        }
    render() {
        let dua = false;
        if(this.props.Updatedata.length>1){
            dua = true;
        }else{
            dua = false;
        }
      return (
        <div class="card-pertama">
            {dua?<div className="flex-row header">
                <div className="flex-row header-penjelasan">
                    <img src={this.props.Logo} height="20px" alt="logo" />
                    <span className="nama">
                        {this.props.Nama}
                    </span>
                </div>
                <div className="updatedata flex-column ">
                    <div className="payloadbox flex-row">
                        <div className="box-payload"></div>
                        <div className="namebox">
                            Science Payload
                        </div>
                    </div>
                    <div className="containerbox flex-row">
                        <div className="box-container"></div>
                        <div className="namebox">
                            Container
                        </div>
                    </div>
                    
                </div>
                <div className="flex-column">
                    <div className="text">
                        {this.props.Updatedata[0]}{this.props.satuan}
                    </div>
                    <div className="text">
                        {this.props.Updatedata[1]}{this.props.satuan}
                    </div>
                    
                </div>
            </div>
            : <div className="flex-row header">
            <div className="flex-row header-penjelasan">
                <img src={this.props.Logo} height="20px" alt="logo" />
                <span className="nama">
                    {this.props.Nama}
                </span>
            </div>
            <div className="text">
                {this.props.Updatedata[0]}{this.props.satuan}
            </div>
        </div>
            }
            <div className="grafik-pertama">
                <Grafik Isidata={this.props.Isidata} Updatedata={this.state.full} />
            </div>
        </div>
      );
    }
  }




export default CardPertama;