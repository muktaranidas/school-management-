import Image from "next/image";

export default function ImportantLink() {
  return (
    <div>
        <div className="bg-[#d5d5d8] flex flex-col justify-center items-center">
        <h1 className="text-[#2A3956] font-bold mt-8 text-5xl">Important Link</h1>
       <div className="grid grid-cols-2 gap-8 my-8 ">
       <div className="flex flex-col p-6  overflow-hidden rounded-lg shadow-md bg-[#FFFFFF]">
                    <div> 
                        <Image src="/fb.png"  width={243} height={243} alt="" className="object-cover  mb-4  dark:bg-gray-500" />
                    </div>
                    <h1 className="text-2xl	font-bold	 text-center mt-2">Facebook Link</h1>
            </div>

            <div className="flex flex-col p-6  overflow-hidden rounded-lg shadow-md bg-[#FFFFFF]">
                    <div> 
                        <Image src="/youtube.png"  width={243} height={243} alt="" className="object-cover  mb-4  dark:bg-gray-500" />
                    </div>
                    <h1 className="text-2xl	font-bold	 text-center mt-2">Youtube Link </h1>
            </div>

       </div>
      

    </div>
    </div>
  );
}