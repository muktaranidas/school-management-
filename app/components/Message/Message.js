import Image from "next/image";
import Menu from "../Menu/Menu";
export default function Message() {
  return (
  <div className="bg-[#FFF8E5] ">
      <Menu></Menu>
  <div className="grid grid-cols-3 mx-auto items-center justify-center ">
        <div className="flex flex-col mb-8">
            <div><h1 className="my-6 text-center text-2xl	font-bold	">Message of Chairman</h1>
            <div className=" flex justify-center">
              <div className="relative  flex justify-center">
                <Image src="/messageImage.png"  width={210.26} height={193.87} className=" z-10 w-[210.26px] h-[193.87px]"/>
                <div className="bg-[#2A3956] absolute -right-4 -bottom-4 w-[210.26px] h-[193.87px]"></div>
                <div className="absolute bottom-4 bg-[#FFFFFF] -left-4 w-[210.26px] h-[193.87px]  border-[#2A3956] border-8"></div>
              </div>
            </div>
            <div className="mt-6 mb-2">
              <h2 className="text-xl font-semibold tracking-wide text-center">Name</h2>
            </div>
            <p className="text-base px-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p></div>
            <button className=" mt-2 text-[#CA3214] text-basec  text-right mr-4" >...Read More</button>
        </div>



        <div className="flex flex-col mb-8">
            <div><h1 className="my-6 text-center text-2xl	font-bold	">Message of Chairman</h1>
            <div className=" flex justify-center">
              <div className="relative bg-purple-300 flex justify-center">
                <Image src="/messageImage.png"  width={210.26} height={193.87} className=" z-10 w-[210.26px] h-[193.87px]"/>
                <div className="bg-[#2A3956] absolute -right-4 -bottom-4 w-[210.26px] h-[193.87px]"></div>
                <div className="absolute bottom-4 bg-[#FFFFFF] -left-4 w-[210.26px] h-[193.87px]  border-[#2A3956] border-8"></div>
              </div>
            </div>
            <div className="mt-6 mb-2">
              <h2 className="text-xl font-semibold tracking-wide text-center">Name</h2>
            </div>
            <p className="text-base px-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p></div>
            <button className=" mt-2 text-[#CA3214] text-basec  text-right mr-4" >...Read More</button>
        </div>
        <div className="flex flex-col mb-8">
            <div><h1 className="my-6 text-center text-2xl	font-bold	">Message of Chairman</h1>
            <div className=" flex justify-center">
              <div className="relative bg-purple-300 flex justify-center">
                <Image src="/messageImage.png"  width={210.26} height={193.87} className=" z-10 w-[210.26px] h-[193.87px]"/>
                <div className="bg-[#2A3956] absolute -right-4 -bottom-4 w-[210.26px] h-[193.87px]"></div>
                <div className="absolute bottom-4 bg-[#FFFFFF] -left-4 w-[210.26px] h-[193.87px]  border-[#2A3956] border-8"></div>
              </div>
            </div>
            <div className="mt-6 mb-2">
              <h2 className="text-xl font-semibold tracking-wide text-center">Name</h2>
            </div>
            <p className="text-base px-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p></div>
            <button className=" mt-2 text-[#CA3214] text-basec  text-right mr-4" >...Read More</button>
        </div>
  </div>
  
  </div>
  );
}