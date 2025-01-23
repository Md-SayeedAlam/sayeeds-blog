import React from 'react';
import Image from 'next/image';
import PrivateRoute from '@/components/PrivateRoute';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';




const Profile =async () => {
     const { getUser} = getKindeServerSession();
   

     const user =await getUser();
    
    return (
        <div>

        {
            user? 
            <>
          <div><h2 className='text-center my-16 text-3xl font-bold'> Welcome to your profile! {user?.given_name}</h2></div>
          <div className='flex flex-col justify-center items-center'>
           <h2 className='text-xl font-semibold'>Name: {user?.given_name}</h2>
          <div className='flex justify-center items-center text-xl'>Image : <Image src={user?.picture}  width={40} height={40} alt="" className='w-10 h-10 rounded-full' /></div>
            
          </div>

            
            </> 
            :
            
            <>
            
          
          <div><PrivateRoute user={user}/></div>
           
           
        
            </>
        }
          

        </div>
    );
};

export default Profile;




