import React from 'react';
import swal from 'sweetalert';

const DonateCard = ({donatedCard}) => {
  const {cardBg, categoryBg, id, image, title, category, price, titleTextColor} = donatedCard ||{}
  // console.log(donatedCard);
    const handleAddToDonation =() => {
      const addDonationArray = [];
     const donationItems =JSON.parse(localStorage.getItem("donations"));
     //jakhon kisu nai takhon e if er vetor dhukbe
     if(!donationItems) {
      addDonationArray.push(donatedCard)
      localStorage.setItem('donations',JSON.stringify(addDonationArray))
      swal("Good job!", "Donation added successfully", "success");
  }
  else{
      const isExist = donationItems.find(donatedCard => donatedCard.id==id)
      console.log(isExist)

      if(!isExist){

          addDonationArray.push(...donationItems,donatedCard)
          localStorage.setItem('donations',JSON.stringify(addDonationArray))

          swal("Good job!", "Donation added successfully", "success");

      }
      else{

          swal("Please!","No Duplicate", "error");
      }
  }

      }

    return (
      <div className='justify-center h-[100vh] w-[130vh]'>
           
            <img className = "relative container  w-[130vh] h-[70vh] object-cover "src = {image} alt="" />
            <button onClick= {handleAddToDonation}
            className ="absolute bottom-40 left-1 bg-red-500  ml-20 mr-10 font-bold 
            rounded h-[50px] w-[150px] align-middle text-white">Donate$<span>290</span></button>
            <div className ='' style = {{color:categoryBg}}></div>    
            <div className="px-2"  style={{backgroundColor:cardBg}}>
            <p className ="font-bold text-4xl ">{category}</p>
            <p className=" text-left font-semibold ">There are many things that can be done to ensure that all people have access to a good education
             Governments <br></br> can invest in public schools, provide financial assistance to students, and make sure 
             that all schools have <br></br> qualified teachers and resources. Families can support their children's education. </p> 
             </div>
        </div>
 
        );
};

export default DonateCard;