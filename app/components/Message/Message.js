import Image from "next/image";
export default function Message() {
  return (
   <div className="grid grid-cols-3 mx-auto bg-[#FFFEF3] items-center justify-center ">
        <div className="">
            <h1 className="my-6 text-center text-2xl	font-bold	">Message of Chairman</h1>
            <Image src="/messageImage.png"  width={210.26} height={193.87} className="mx-auto"/>
            <div className="mt-6 mb-2">
              <h2 className="text-xl font-semibold tracking-wide text-center">Name</h2>
            </div>
            <p className="text-base px-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            {/* <button className=" mt-2 text-[#CA3214] text-base" >...Read More</button> */}
        </div>
        <div className="">
            <h1 className="my-6 text-center text-2xl	font-bold	">Message of Chairman</h1>
            <Image src="/messageImage.png"  width={210.26} height={193.87} className="mx-auto"/>
            <div className="mt-6 mb-2">
              <h2 className="text-xl font-semibold tracking-wide text-center">Name</h2>
            </div>
            <p className="text-base px-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            {/* <button className=" mt-2 text-[#CA3214] text-base" >...Read More</button> */}
        </div>
        <div className="">
            <h1 className="my-6 text-center text-2xl	font-bold	">Message of Chairman</h1>
            <Image src="/messageImage.png"  width={210.26} height={193.87} className="mx-auto"/>
            <div className="mt-6 mb-2">
              <h2 className="text-xl font-semibold tracking-wide text-center">Name</h2>
            </div>
            <p className="text-base px-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            {/* <button className=" mt-2 text-[#CA3214] text-base" >...Read More</button> */}
        </div>
        
       


   
   </div>
  );
}