import Image from "next/image";
export default function Banner() {
  return (
    <div className="bg-blue-300 pb-24">
	<div className="flex flex-col   mx-auto">
        <div className=" flex flex-row items-center  gap-8  it  ">
            <div className=" pl-8">
                <Image src="/banner.png"  width={822} height={361} className=" rounded-lg" />
            </div>
            <div className="flex gap-2  flex-col">
                <div className="bg-[#FFFDE9]">
                    <p className="text-[#232323] font-bold	text-4xl w-full px-2 py-4 ">Notice</p>
                </div>
                <div className="bg-[#192F59] text-white flex gap- flex-row  items-center justify-center  px-2 py-2">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-4 items-center justify-center">
                            <p className="text-base	font-medium	">01</p>
                            <p className="text-xs 	font-medium	">Admission Open Notice</p>
                        </div>
                        <div className="flex gap-2  flex-row font-medium text-xs  ">
                            <p className="text-base	font-medium	 ">July</p>
                            <div className="flex  gap-2 flex-row font-medium text-xs items-center justify-center ">
                                <p>Download</p>
                                <p>View</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#3DB166] text-white flex gap-6 flex-row  items-center justify-center  px-2 py-2">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-4 items-center justify-center">
                            <p className="text-base	font-medium	">01</p>
                            <p className="text-xs 	font-medium	">Admission Open Notice</p>
                        </div>
                        <div className="flex gap-2  flex-row font-medium text-xs  ">
                            <p className="text-base	font-medium	 ">July</p>
                            <div className="flex  gap-2 flex-row font-medium text-xs items-center justify-center ">
                                <p>Download</p>
                                <p>View</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#192F59] text-white flex gap- flex-row  items-center justify-center  px-2 py-2">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-4 items-center justify-center">
                            <p className="text-base	font-medium	">01</p>
                            <p className="text-xs 	font-medium	">Admission Open Notice</p>
                        </div>
                        <div className="flex gap-2  flex-row font-medium text-xs  ">
                            <p className="text-base	font-medium	 ">July</p>
                            <div className="flex  gap-2 flex-row font-medium text-xs items-center justify-center ">
                                <p>Download</p>
                                <p>View</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#3DB166] text-white flex gap-6 flex-row  items-center justify-center  px-2 py-2">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-4 items-center justify-center">
                            <p className="text-base	font-medium	">01</p>
                            <p className="text-xs 	font-medium	">Admission Open Notice</p>
                        </div>
                        <div className="flex gap-2  flex-row font-medium text-xs  ">
                            <p className="text-base	font-medium	 ">July</p>
                            <div className="flex  gap-2 flex-row font-medium text-xs items-center justify-center ">
                                <p>Download</p>
                                <p>View</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="pl-8 text-[#FFFFFF] font-bold text-lg	">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever  </div>
    </div>
    </div>
  );
}