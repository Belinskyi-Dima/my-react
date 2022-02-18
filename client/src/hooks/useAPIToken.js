
export const useAPIToken = () => {

   const header = {
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
   }; 

   const server = 'http://localhost:5000/api'; 


   return {
         server, 
         header, 
   }
} 