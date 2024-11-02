import React from "react";
import { FaInstagram } from "react-icons/fa";

const Event = () => {
  return (
    <div>
      <div className="flex flex-col">
        {/* <h1 className="self-center text-4xl font-semibold">
          Event discription
        </h1> */}
        <div className="w-[97vw] h-[70vh] bg-slate-500 self-center my-3">
          <img src="" alt="event desc" />
        </div>
        <div className="m-10 text-2xl font-semibold my-24 ">
          Date <br />
          Venue
        </div>

        <div className="my-48 text-5xl text-center">Event Description</div>
        <a href="" className="text-5xl self-center ">
          <FaInstagram className="" />
        </a>
      </div>
    </div>
  );
};

export default Event;
