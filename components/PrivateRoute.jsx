// 'use client'
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';



// const PrivateRoute = () => {
//     const router = useRouter()
    
//     return router.push('/api/auth/login')
    



         
    // return (
    // <div>
    //     <h2>This is  private route . Please <Link href='/api/auth/login'><button className='text-sky-500'>Login</button></Link></h2>
        
    // </div>
    // );
// };

// export default PrivateRoute;

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PrivateRoute = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the login page on component mount
    router.push('/api/auth/login');
  }, [router]);

  return null; // Render nothing while redirecting
};

export default PrivateRoute;
