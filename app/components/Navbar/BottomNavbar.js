export default function BottomNavbar() {
  return (
    <div className="navbar bg-gradient-to-r from-blue-500 to-cyan-500 ">
    <div className="hidden lg:flex max-w-[1334px] ">
      <ul className="menu menu-horizontal ">
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