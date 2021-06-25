 export const registerUser = async (firstName, lastName, email) => {

     try {
         const response  =  await fetch(process.env.REACT_APP_API_URL, {
             method: "POST",
             headers: {
                 "content-type": "application/json"
             },
             body: JSON.stringify({firstName, lastName, email})
         })
         const data =  await response.json();
         console.log(data);
         return true;
     } catch (error) {
         console.log(error);
         return false;
     }
}