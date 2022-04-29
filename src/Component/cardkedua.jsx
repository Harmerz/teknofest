import React from "react";
import '../Style/Card.css'
import Grafik from "./Data/grafik";

const Card_Kedua = (cardprops) => {
    return(
        <div class="card-kedua">

                <Grafik Isidata={cardprops.Isidata} Updatedata={cardprops.Updatedata} />
        </div>
    )
}
export default Card_Kedua;