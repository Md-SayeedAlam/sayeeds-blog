'use client';
import Link from 'next/link';
import React from 'react';

const Card = ({items}) => {
    // console.log(items)
    return (
        
            <div  className="card bg-base-100 gap-4  items-center shadow-xl">
      
      <div className="card-body items-center  text-center space-y-3 px-2">
        <h2 className="card-title text-left h-28">Title: {items.title}</h2>
        
        <div className="card-actions">
          <Link href={{
                    pathname: `/blog/${items.id}`,
                    
                  }}  ><button className="px-4 py-2 bg-green-300 rounded-xl">View Details </button></Link>
        </div>
      </div>
    </div>
        
    );
};

export default Card;