import React, { useEffect, useState } from 'react';
import DonateShowCard from '../DonateShowCard/DonateShowCard';
import DonateCard from '../DonateCard/DonateCard';

const Donation = () => {
    const [donations,setDonations]= useState([])
    const [noFound,setnoFound]= useState('')

 useEffect(() => {   
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    

  if(donationItems) {
    setDonations(donationItems)
  } else{
   setnoFound("No data found")

  }
},[]);

//   console.log(donations)

  


    return (
      
        <div>{noFound ? <p>{noFound}</p> 
        :
        <div>
            <div className='grid grid-cols-2 gap-5 rounded-md'>
                {donations.map(donetedCard =><DonateShowCard key ={ donetedCard.id} donatedCard={donetedCard}></DonateShowCard>)}
             </div>
        </div>};
        
        </div>
    );
};

export default Donation;