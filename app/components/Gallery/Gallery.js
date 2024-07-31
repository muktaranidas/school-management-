import Image from "next/image";

export default function Gallery() {
  return (
    <div>
        <div className="bg-[#FFF8E5] flex flex-col justify-center items-center">
            <h1 className="text-[#0A033C] font-bold mt-8 text-5xl">Gallary</h1>
                <div className="flex flex-row items-center gap-6">
                    <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 bg-[#FFFFFF]   rounded-full">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
		            </button>
                    <div className="grid grid-cols-3 my-8 gap-8 ">
                    <div className="flex flex-col py-4 px-12  overflow-hidden rounded-lg shadow-md bg-[#FFFFFF]">
                            <div> 
                                <Image src="/videoGallary.jpg"  width={216} height={125} alt="" className="object-cover  mb-2  dark:bg-gray-500" />
                            </div>
                            <h1 className="text-base text-[#1F1C14B2] text-center ">Content Name</h1>
                    </div>
                    <div className="flex flex-col py-4 px-12  overflow-hidden rounded-lg shadow-md bg-[#FFFFFF]">
                            <div> 
                                <Image src="/videoGallary.jpg"  width={216} height={125} alt="" className="object-cover  mb-2  dark:bg-gray-500" />
                            </div>
                            <h1 className="text-base text-[#1F1C14B2] text-center ">Content Name</h1>
                    </div>
                    <div className="flex flex-col py-4 px-12  overflow-hidden rounded-lg shadow-md bg-[#FFFFFF]">
                            <div> 
                                <Image src="/videoGallary.jpg"  width={216} height={125} alt="" className="object-cover  mb-2  dark:bg-gray-500" />
                            </div>
                            <h1 className="text-base text-[#1F1C14B2] text-center ">Content Name</h1>
                    </div>
                    
                    </div> 
                    <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0  bg-[#FFFFFF] rounded-full ">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
		            </button></div>
            </div>
        </div>
  



  );
}