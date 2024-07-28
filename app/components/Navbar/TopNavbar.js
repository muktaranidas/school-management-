export default function TopNavbar() {
  return (
    <div className=" bg-[#192F59] w-[1440px]">
  <div className="navbar max-w-[1334px] mx-auto"><div className="flex-1">
    <a className="text-[#FFFFFF]">daypiker use here</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-3 font-bold	 ">
      <li className="bg-[#FFFEF3] rounded">
        <details>
          <summary>Login</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Signin</a></li>
          </ul>
        </details>
      </li>
      <li className="bg-[#3DB166] text-[#FFFFFF] rounded"><a>Bangla</a></li>
    </ul>
  </div></div>
</div>
  );
}




