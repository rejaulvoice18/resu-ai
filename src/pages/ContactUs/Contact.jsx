import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// ✅ Custom marker icon fix
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Contact = () => {
  const position = [23.8103, 90.4125];

  return (
    <div className="w-full border border-black">
      <div className="w-[90%] mt-24 mx-auto flex rounded-md h-[500px] bg-[rgba(100,100,100,0.5)] shadow">
        {/* 📨 Contact Form */}
        <div className="w-1/2 h-full">
          <h1 className="text-center text-6xl font-semibold my-6 text-white">
            Contact Us
          </h1>
          <form className="w-[80%] mx-auto text-white">
            <label>
              <h1 className="font-semibold">Name</h1>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full text-white h-[35px] border rounded-lg outline-0 ps-2 my-2 bg-transparent"
              />
            </label>
            <label>
              <h1 className="font-semibold">Email</h1>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full h-[35px] text-white border rounded-lg ps-2 my-2 bg-transparent"
              />
            </label>
            <label>
              <h1 className="font-semibold">Question</h1>
              <textarea
                className="border rounded-lg w-full p-2 my-2 text-white bg-transparent"
                placeholder="Enter question or feedback"
              ></textarea>
            </label>
            <div className="w-[150px] my-4">
              <button
                type="submit"
                className="btn w-full bg-[#686de0] rounded-md text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* 🗺️ Leaflet Map */}
        <div className="w-1/2">
          <MapContainer
            center={position}
            zoom={13}
            style={{
              width: "100%",
              height: "500px",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={customIcon}>
              <Popup>
                You are here! <br /> Dhaka, Bangladesh.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
