import React from "react";
import "./Css/style.css";

const ProfileDetails = () => {
  return (
    <div
      className="flex justify-center items-center p-3"
      style={{ minHeight: "100vh" }}
    >
      <div className="max-w-5xl w-full">
        <form className="flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-3 sm:items-center sm:flex-row">
            <input
              type="text"
              placeholder="First name"
              className="flex-1 border-2 border-blue-500 rounded-md p-2 outline-none"
            />
            <input
              type="text"
              placeholder="Middle name"
              className="flex-1 border-2 border-blue-500 rounded-md p-2 outline-none"
            />
            <input
              type="text"
              placeholder="Last name"
              className="flex-1 border-2 border-blue-500 rounded-md p-2 outline-none"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="flex-1 border-2 border-blue-500 rounded-md p-2 outline-none"
            />
            <input
              type="number"
              placeholder="Phone number"
              className="flex-1 border-2 border-blue-500 rounded-md p-2 outline-none"
            />
          </div>
          <button
            type="submit"
            className="self-center p-3 px-8 rounded-md bg-blue-500 w-fit text-white"
          >
            submit
          </button>
        </form>
        <div className="overflow-x-auto">
          <table className="w-full mt-6">
            <thead>
              <tr className="border-b-2 border-blue-600">
                <th className="px-4 py-2 text-left">First name</th>
                <th className="px-4 py-2 text-left">Middle name</th>
                <th className="px-4 py-2 text-left">Last name</th>
                <th className="px-4 py-2 text-left">Email address</th>
                <th className="px-4 py-2 text-left">Phone number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-300">
                <td className="px-4 py-2">hi</td>
                <td className="px-4 py-2">hi</td>
                <td className="px-4 py-2">hi</td>
                <td className="px-4 py-2">hi</td>
                <td className="px-4 py-2">hi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
