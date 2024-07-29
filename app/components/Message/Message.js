import Image from "next/image";
export default function Message() {
  return (
   <div className="grid grid-cols-3 mx-auto my-8">
     <div className="card bg-base-100 w-96 shadow-xl">
     <h2 className="card-title items-center justify-center text-center">Message Of The Principle</h2>   
  <figure className="px-10 pt-10">
  <Image src="/messageImage.png" width={210.26} height={193.87}/>
  </figure>
  <div className=" card-body items-center text-center">
    <h2 className="card-title">Name</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  </div>
  <p className="">...Read More</p>
</div>
   </div>
  );
}