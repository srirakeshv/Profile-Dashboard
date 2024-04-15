import React, { useState } from "react";
import "./Css/style.css";

const ProfileDetails = () => {
  const [inputData, setInputData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    phonenumber: "",
  }); //initializing data storage
  const [allData, setAllData] = useState([]); //storing Data in this as array
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState(false);

  //tracking each input field and store thir value in their respective
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //submit button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();

    //checking for errors in phonenumber
    if (inputData.phonenumber === "") {
      setPhoneError("Phonenumber should not be empty");
      setFormError(true);
    } else if (inputData.phonenumber.length !== 10) {
      setPhoneError("Phone number must be 10 digits");
      setFormError(true);
    }

    if (inputData.email === "") {
      setEmailError("Email should not be empty");
      setFormError(true);
    }

    console.log(inputData);
    if (!formError) {
      setAllData((prevData) => [...prevData, inputData]);
      setInputData({
        firstname: "",
        middlename: "",
        lastname: "",
        email: "",
        phonenumber: "",
      });
      console.log(allData);
    }
  };

  return (
    <div
      className="flex justify-center items-center p-3"
      style={{ minHeight: "100vh" }}
    >
      <div className="max-w-5xl w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-3 sm:items-center sm:flex-row">
            <div className="flex-1 flex flex-col gap-1">
              <input
                type="text"
                name="firstname"
                value={inputData.firstname}
                placeholder="First name"
                className="border-2 border-blue-500 rounded-md p-2 outline-none"
                onChange={handleChange}
              />
              <p className="text-red-600 text-sm"></p>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <input
                type="text"
                name="middlename"
                value={inputData.middlename}
                placeholder="Middle name"
                className="border-2 border-blue-500 rounded-md p-2 outline-none"
                onChange={handleChange}
              />
              <p className="text-red-600 text-sm"></p>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <input
                type="text"
                name="lastname"
                value={inputData.lastname}
                placeholder="Last name"
                className="border-2 border-blue-500 rounded-md p-2 outline-none"
                onChange={handleChange}
              />
              <p className="text-red-600 text-sm"></p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full">
            <div className="flex-1 flex flex-col gap-1">
              <input
                type="email"
                name="email"
                value={inputData.email}
                placeholder="example@gmail.com"
                className="border-2 border-blue-500 rounded-md p-2 outline-none"
                onChange={handleChange}
              />
              <p className="text-red-600 text-sm">{emailError}</p>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <input
                type="number"
                name="phonenumber"
                value={inputData.phonenumber}
                placeholder="Phone number"
                className="border-2 border-blue-500 rounded-md p-2 outline-none"
                onChange={handleChange}
              />
              <p className="text-red-600 text-sm">{phoneError}</p>
            </div>
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
              {allData.map((data, index) => (
                <tr
                  className={`${
                    allData.length >= 1 && index % 2 === 0
                      ? "bg-blue-300"
                      : "bg-gray-300"
                  }`}
                  key={index}
                >
                  <td className="px-4 py-2">{data.firstname}</td>
                  <td className="px-4 py-2">{data.middlename}</td>
                  <td className="px-4 py-2">{data.lastname}</td>
                  <td className="px-4 py-2">{data.email}</td>
                  <td className="px-4 py-2">{data.phonenumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
