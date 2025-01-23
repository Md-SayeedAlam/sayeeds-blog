
import Card from "@/components/Card";
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
    data.map(item=><Card key={item.id} items={item}></Card>)
  }
 </div>


    </div>


    </div>
  );
}
export default Home;