import React from "react";
import Contact from "./Contact";
import NavBar from "@/shared/NavBar/NavBar";

const ContactUs = () => {
  return (
    <div className="w-[100%] bg-black  min-h-screen">
      <NavBar></NavBar>
      <Contact></Contact>
    </div>
  );
};

export default ContactUs;
