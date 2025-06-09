import React from "react";
import Event from "./Event.jsx";


const Homepage = () => {
    return (
        <div>
    
            <table>
                <tbody>
                    <tr>
                        <td className = 'festival'><Event pic ='/assets/edc.jpg' name ='Electric Daisy Carnival (EDC)' location ='Las Vegas, NV' website ='https://lasvegas.electricdaisycarnival.com/'></Event> </td>
                        <td className = 'festival'><Event pic ='/assets/ultra.jpg' name ='Ultra Music Festival' location ='Miami, FL' website ='https://ultramusicfestival.com/'></Event> </td>
                        <td className = 'festival'><Event pic ='/assets/iiipoints.png'name ='III Points' location ='Miami, FL' website ='https://www.iiipoints.com/?utm_source=google&utm_medium=Branded&utm_campaign=IIIP25_CONVERSIONS_SEARCH&utm_content=rsa&gad_source=1&gad_campaignid=22621123147&gbraid=0AAAAADG84p79Nz6eMcHt1543amV1aR7zL&gclid=CjwKCAjw6ZTCBhBOEiwAqfwJd23uSYocjQgHl76MF7rgJGPfL7bnUt4Rif6SyeL7i36st0_q4umHsBoCjV8QAvD_BwE'></Event> </td>
                    </tr>

                     <tr>
                        <td className = 'festival'><Event pic ='/assets/bass.jpg' name ='Bass Canyon' location ='The Gorge Ampitheater, WA' website ='https://www.basscanyon.com/'></Event> </td>
                        <td className = 'festival'><Event pic ='/assets/ef.png' name ='Electric Forest' location ='Rothbury, MI' website ='https://www.electricforest.com/'></Event> </td>
                        <td className = 'festival'><Event pic ='/assets/hs.jpg' name ='Hard Summer Music Festival' location ='Los Angeles, CA' website ='https://www.hardsummer.com/'></Event> </td>
                    </tr>

                     <tr>
                        <td className = 'festival'><Event pic ='/assets/ll.jpg' name ='Lost Lands' location ='Legend Valley OH' website ='https://www.lostlandsfestival.com/'></Event> </td>
                        <td className = 'festival'><Event pic ='/assets/bw.jpeg' name ='Beyond Wonderland: SoCal' location ='San Bernadino, CA' website ='https://socal.beyondwonderland.com/'></Event> </td>
                        <td className = 'festival'><Event pic ='/assets/mov.png' name ='Movement Electronic Music Festival' location ='Detroit, MI' website ='https://movementfestival.com/'></Event> </td>
                    </tr>

                     <tr>
                        <td className = 'festival'><Event pic ='/assets/pg.jpg' name ='Project Glow' location ='Washington, DC' website ='https://projectglowfest.com/'></Event> </td>
                        <td className = 'festival'><Event pic ='/assets/dt.png' name ='Day Trip' location ='Long Beach, CA' website ='https://www.daytripfest.com/'></Event> </td>
                        <td className = 'festival'><Event pic ='/assets/ud.jpg' name ='Ubbi Dubbi' location ='Fort Worth, TX' website ='https://ubbidubbifestival.com/'></Event> </td>
                    </tr>

                </tbody>
            </table>
        </div>
        
    );
}
export default Homepage;