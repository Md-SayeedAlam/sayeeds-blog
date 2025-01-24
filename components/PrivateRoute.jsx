"use client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PrivateRoute = async () => {
  const [user, setUser] = useState("");
  const { getUser } = getKindeServerSession();
  const client = await getUser();
  setUser(client);

  return (
    <div>
      <div><h2 className='text-center my-16 text-3xl font-bold'> Welcome to your profile! {user?.given_name}</h2></div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold">Name: {user?.given_name}</h2>
        <div className="flex justify-center items-center text-xl">
          Image :{" "}
          <Image
            src={user?.picture}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
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
