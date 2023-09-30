import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DonateCard from '../DonateCard/DonateCard';


const DonationCard = () => {
    const {id} = useParams()
    // console.log(typeof id);

    const allData = useLoaderData();

    // console.log(allData);
    
    const donatedCard = allData.find(singledata =>singledata.id == id)
    // console.log(donatedCard);
    
    return (

       <div> 
            {
                <DonateCard donatedCard ={donatedCard}></DonateCard>
            }
        </div>
    );
};

export default DonationCard;