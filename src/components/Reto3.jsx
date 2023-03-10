import React from "react";
import '../stylesheets/Reto3.css';

function Reto3(props){
    return(
        <div className="box-container">
        <div className="card">
            <div className="body">
                <img src= {require(`../img/${props.imgu}.jpg`)} alt="" className="imgu" />
                <h3 className="titulo">{props.titulo}</h3>
                <p className="textouno">{props.textouno}</p>

            <div className="info">
                <div className="uno">
                    <img src= {require(`../img/${props.imgn}.svg`)} alt="" className="imgn" />
                    <p className="texto2">{props.texto2}</p>
                </div>
                <div className="dos">
                    <img src= {require(`../img/${props.img}.svg`)} alt="" className="img" />
                    <p className="texto3">{props.texto3}</p>
                </div>
            </div>
            <div className="linea"></div>
            <div className="lol">
                <img src= {require(`../img/${props.imagen}.png`)} alt="" className="imagen" />
                <p className="t1">{props.t1}</p>
                <p className="t2">{props.t2}</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Reto3;