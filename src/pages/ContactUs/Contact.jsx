
import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";

// Fix missing marker icons in Leaflet (ES6 syntax)
 new L.Icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
const Contact = () => {
    const position = [23.8103, 90.4125];
    return (
        <div className='w-[100%] border border-black'>
            <div className='w-[90%] mt-24 mx-auto flex rounded-md h-[500px] bg-[rgba(100,100,100,0.5)] shadow '>
                <div className='w-[50%]  h-[100%]'>
                    <h1 className='text-center text-6xl font-semibold my-6'>Contact Us</h1>
                    <form className='w-[80%] mx-auto text-white'>
                        <label>
                            <h1 className=' font-semibold'>Name</h1>
                            <input type="text" placeholder='Enter your name' className='w-[100%] text-white h-[35px] border
                             rounded-lg outline-0 ps-2 my-2' />
                        </label>
                        <label>
                            <h1 className=' font-semibold'>Email</h1>
                            <input type="text" placeholder='your@email.com' className='w-[100%] h-[35px] text-white border rounded-lg ps-2 my-2' />
                        </label>
                        <label>
                            <h1 className=' font-semibold'>Question</h1>
                            <textarea className='border rounded-lg w-[100%] p-2 my-2 text-white' name="" id="" placeholder='Enter question or feedback'></textarea>
                        </label>
                        <div className='w-[150px] my-4'>
                            <button type='submit' className='btn w-[100%] bg-[#686de0] rounded-md'>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='w-[50%] '>
                    <MapContainer
                        center={position}
                        zoom={13}
                        style={{ width:"100%",height:'500px',borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}
                    >
                      
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                   
                        <Marker position={position}>
                            <Popup>
                                 You are here!! <br /> Dhaka, Bangladesh.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>

    );
};

export default Contact;