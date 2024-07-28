export default function BottomNavbar() {
    // background: linear-gradient(90deg, #4D609B 0%, #67A1D0 50%, #8FD4F6 100%);
  return (
    <div className="navbar bg-gradient-to-r from-blue-500 to-cyan-500  w-[1440px]">
    <div className=" hidden lg:flex max-w-[1334px]  ">
      <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li>
          <details>
            <summary>Academic</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>Notice</a></li>
        <li><a>Result</a></li>
        <li><a>Admission</a></li>
      </ul>
    </div>
   
  </div>
  );
}