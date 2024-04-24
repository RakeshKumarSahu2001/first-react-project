import React  from "react";
import "./index.css";


function Card(props){
    return (<>
 <div className='card'>
 <div className='box'>
<img src={props.srcimage} alt='img' className='movieimage' />
<div className='information'>
<span className='catagory'>{props.titel}</span>
<h3 className='titel'>{props.name}</h3>
<a href={props.link} target='_blank' rel="noreferrer noopener"><button>Watch Now</button></a>
</div>
 </div>
 </div>
    </>)
}
export default Card;