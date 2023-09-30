// get data from local storage 
// crate data for local storage 
// save data to local storage


// get data
const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('donated');
    if(storedDonation){
        return JSON.parse(storedDonation);

    }
    return []
}

const saveDonation = id => {


    const allstoredDonation = getStoredDonation();

    console.log(id, allstoredDonation)
    const exists = allstoredDonation.find(donationId => donationId == id);

    console.log(exists, allstoredDonation);

    if(!exists){
        const intId = parseInt(id)
        allstoredDonation.push(intId);
        localStorage.setItem('donated', JSON.stringify(allstoredDonation))
    }
}
export {getStoredDonation, saveDonation}
