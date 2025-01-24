import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  
  return (
    <>
      <div className=" bg-gray-200 sticky z-10 inset-0">
        <nav className="flex justify-between items-center container mx-auto">
          <div>
            <h2>Sayeed`s Blog</h2>
          </div>
          <div className="flex justify-center space-x-3 ">
            <Link
              href="/"
              className="px-1 lg:px-2 py-1 border border-gray-400 rounded-md"
            >
              Home
            </Link>

            <Link
              href={`${user ? "/profile" : "api/auth/login"}`}
              className="px-1 lg:px-2 py-1 border border-gray-400 rounded-md"
            >
              Profile
            </Link>

            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className="px-1 lg:px-2 py-1 border border-gray-400 rounded-md"
                >
                  Sign Out
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/login"
                  className="px-1 lg:px-2 py-1 border border-gray-400 rounded-md"
                >
                  {" "}
                  Sign In
                </Link>

                <Link
                  href="/api/auth/register"
                  className="px-1 lg:px-2 py-1 border border-gray-400 rounded-md"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
