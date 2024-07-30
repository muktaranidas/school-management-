import Image from "next/image";

export default function MiddleNavbar() {
  return (
    <div className=" max-w-[1440px]">
  <div className="navbar max-w-[1334px] mx-auto">
    <div className="flex-1">
  <div className="">
    <Image src="/edu.png" width={120} height={44}/>
  </div>
    <div className="flex flex-col ml-10 ">
      <div className="text-[#192F59] font-extrabold	text-4xl	mb-2">Education Home</div>
      <ul className="flex flex-row gap-6 text-sm	 text-[#232323]">
        <li><a>EIIN NO: 1256</a></li>
        <li><a>Address: 123, Gulshan, Dhaka</a></li>
        <li><a>Email: info@demo.com.bd</a></li>
        <li><a>Phone No: 01823456689</a></li>
      </ul></div>
   
  </div>
  <div className="">
  <Image src="/mojib.png" width={216} height={77}/>
  </div>
  </div>
</div>

  );
}