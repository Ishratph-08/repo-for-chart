import React from 'react';
import DonateCard from './../DonateCard/DonateCard';

const DonateShowCard = ({donatedCard}) => {

    const {cardBg,categoryBg, id,image,title,category,price,titleTextcolor} = donatedCard || {}

    return (
        <div>
            
  <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 ">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img src={image} alt="image"className="h-full w-full object-cover"/>
  </div>
  <div className= "p-6"style ={{backgroundColor:cardBg}}>
  
    <div className ='' style = {{color:categoryBg}}>    
            
    <p className ="font-bold text-4xl ">{category}</p></div>
             
             
     <div></div>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    {title}
    </h4>
    <a className="inline-block" href="#">
    <p className ="font-bold text-4xl ">{price}</p>  
    <button 
    className ="bg-red-400 my-10  ml-20 mr-10 font-bold 
    rounded h-[50px] w-[150px] align-middle text-white">View Details</button>
  
    </a>
  </div>
</div>
{/* </Link> */}
        </div>
    );
};

export default DonateShowCard;