"use client"
import { useEffect, useState } from "react"
export default function TopNavbar() {
  const [currentDateTime, setCurrentDateTime] = useState({
    date: '',
    time: '',
    day: ''
  });
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const day = days[now.getDay()];
      const date = now.getDate();
      const month = months[now.getMonth()];
      const year = now.getFullYear();
      const formattedDate = `${date} ${month}-${year}`;
      const time = now.toLocaleTimeString(); // Customize format if needed
      setCurrentDateTime({ date: formattedDate, time, day });
    };
    // Set initial date and time
    updateDateTime();
    // Update date and time every second
    const intervalId = setInterval(updateDateTime, 1000);
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className=" bg-[#192F59]">
    <div className="bg-blue-950 text-white flex flex-row justify-between">
        <div className="flex flex-row py-4 px-8 gap-8  ">
              <div>{currentDateTime.day}</div>
              <div>{currentDateTime.date}</div>
              <div>{currentDateTime.time}</div>
        </div>
        <div className="flex flex-row py-4 px-8 gap-3">
          <button className="px-3 py-1 rounded bg-[#FFFEF3] text-[#192F59]">Login</button>
          <button className="px-3 py-1 bg-[#3DB166] text-[#FFFFFF] rounded">Bangla</button>
        </div>
    </div>


  {/* <div className="navbar  ">
    <div className="flex-1">
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
  </div>
  </div> */}
</div>
  );
}




