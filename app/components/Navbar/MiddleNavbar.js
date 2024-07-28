import eduLogo from "../../../src/image/edu.png"
import mojib from "../../../src/image/mojib.png"
export default function MiddleNavbar() {
  return (
    <div className=" w-[1440px]">
  <div className="navbar max-w-[1334px] mx-auto">
    <div className="flex-1">
  <div className="">
    < img src={eduLogo} />
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
    < img src={mojib} />
  </div>
  </div>
</div>

  );
}