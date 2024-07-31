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
          <button className="px-2 py-0 rounded bg-[#FFFEF3] text-[#192F59] flex items-center gap-1 font-bold">
            <p>Login</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
          </button>
          <button className="px-3 py-1 bg-[#3DB166] text-[#FFFFFF] rounded">Bangla</button>
        </div>
    </div>
</div>
  );
}




