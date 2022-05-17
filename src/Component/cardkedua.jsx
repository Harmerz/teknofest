import React from "react";
import '../Style/Card.css'
import Grafik from "./Data/grafik";

const CardKedua = (CardProps) => {
    return(
        <div class="card-kedua">

                <Grafik Isidata={CardProps.Isidata} Updatedata={CardProps.Updatedata} />
        </div>
    )
}
export default CardKedua;