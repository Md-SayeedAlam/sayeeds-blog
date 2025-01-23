'use client'
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';



const PrivateRoute = ({user}) => {
    
    const router = useRouter()
    
    if(!user) return  redirect('/api/auth/login')
    



         
    return (
    <div>
        <h2>This is  private route . Please <Link href='/api/auth/login'><button className='text-sky-500'>Login</button></Link></h2>
        
    </div>
    );
};

export default PrivateRoute;

// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// const PrivateRoute = () => {
//   const router = useRouter();

//   useEffect(() => {
    
//     router.push('/api/auth/login');
//   }, [router]);

//   return null; 
// };

// export default PrivateRoute;
