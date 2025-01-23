
import Link from "next/link";


 const Home = async() =>{

 const res = await  fetch('https://jsonplaceholder.typicode.com/posts')
 
  const data =await res.json()

  // console.log(data)
  


  return (
    <div className="">
   

    <div className="container mx-auto my-10">

    <h2 className="text-center text-3xl font-semibold my-5">My Blogs</h2>

 <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
 {
    data.map(item=><div key={item.id} className="card bg-base-100 gap-4  items-center shadow-xl">
      {/* <figure className="px-10 pt-10">
       
      </figure> */}
      <div className="card-body items-center  text-center space-y-3 px-2">
        <h2 className="card-title text-left h-28">Title: {item.title}</h2>
        
        <div className="card-actions">
          <Link href={{
                    pathname: `/blog/${item.id}`,
                    
                  }}  ><button className="px-4 py-2 bg-green-300 rounded-xl">View Details </button></Link>
        </div>
      </div>
    </div>)
  }
 </div>


    </div>


    </div>
  );
}
export default Home;