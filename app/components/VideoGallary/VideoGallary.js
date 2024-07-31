import Image from "next/image";

export default function VideoGallary() {
  return (
    <div className="bg-[#2A3956]  flex flex-col justify-center items-center">
        <h1 className="text-[#3DB166] font-bold mt-8 text-2xl lg:text-5xl">Video Gallary</h1>
       <div className="grid grid-cols-1 lg:grid-cols-2  my-8 gap-8 ">
            <div className="flex flex-col p-6  overflow-hidden rounded-lg shadow-md bg-[#FFFFFF]">
                            <div> 
                                <Image src="/videoGallary.jpg"  width={427} height={316} alt="" className="object-cover  mb-4  dark:bg-gray-500" />
                            </div>
                            <h1 className="text-xl text-center mt-4">Content Name</h1>
                    </div><div className="flex flex-col p-6  overflow-hidden rounded-lg shadow-md bg-[#FFFFFF]">
                            <div> 
                                <Image src="/videoGallary.jpg"  width={427} height={316} alt="" className="object-cover  mb-4  dark:bg-gray-500" />
                            </div>
                            <h1 className="text-xl text-center mt-4">Content Name</h1>
                    </div><div className="flex flex-col p-6  overflow-hidden rounded-lg shadow-md bg-[#FFFFFF]">
                            <div> 
                                <Image src="/videoGallary.jpg"  width={427} height={316} alt="" className="object-cover  mb-4  dark:bg-gray-500" />
                            </div>
                            <h1 className="text-xl text-center mt-4">Content Name</h1>
                    </div><div className="flex flex-col p-6  overflow-hidden rounded-lg shadow-md bg-[#FFFFFF]">
                            <div> 
                                <Image src="/videoGallary.jpg"  width={427} height={316} alt="" className="object-cover  mb-4  dark:bg-gray-500" />
                            </div>
                            <h1 className="text-xl text-center mt-4">Content Name</h1>
            </div>
       </div>
      

    </div>
  );
}