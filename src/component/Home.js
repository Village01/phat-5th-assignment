import React, { Component } from "react";
import './style.css'
import { Link } from "react-router-dom";
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="type">
                    <h2>Type of Cars</h2>
                    <p>- A convertible is a car with a roof that can be opened or taken off for an open-air drive.
                        Sportier convertibles are called roadsters.</p><br />
                    <p>- A hatchback is a smaller car with a cargo area that uses the same space as the cabin (instead
                        of a separate trunk like in a sedan or coupes).</p>
                    <p>- They combine the sportiness of coupes and sedans with the storage space of SUVs.</p><br />
                    <p>- A pickup truck is a truck with a separate cabin and cargo area on a ladder frame. The cargo
                        area is called the "bed".</p><br />
                    <p>- A sedan is a car with a sloped rear window and separate trunk that has four doors.</p><br />
                    <p>- An SUV (sport utility vehicle) is a rugged vehicle that has a combined passenger and cargo area
                        (like in hatchbacks, station wagons, and vans). SUVs are very popular due to their usefulness.</p>
                    <br />
                    <p>- A van is a big box-shaped vehicle meant for carrying plenty of passengers or cargo. There are
                        many different sizes of vans, such as minivans, which are made for families.</p><br />
                </div>
                <p>----------------------------------------------Advantage and Disadvantage---------------------------------------------</p>
                <div className="adv">
                    <br /><h3>Advantage</h3>
                    <img className="advimg"
                        src="https://www.smartmotorist.com/wp-content/uploads/2019/01/Driving-Safety-In-the-Rain-e1560223309220.jpg"
                        alt="Advantage" width={400} height={200} /><br />
                    - Arrive quickly, rested, and neither too hot or too cold.<br />
                    - Can travel any distance a lot faster than you can do so either on bike or on foot.<br />
                    - Can listen to music or news while traveling without having to carry a radio along with you.<br />
                    - When it rains, you can travel without getting wet.<br />
                </div>
                <div className="disad">
                    <br /><h4>Disadvantage</h4>
                    <img className="advimg2"
                        src="https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/PQzTv8MmTEzAnZdTR6nAtj/3fb480ec-ff89-4450-8589-84fc8dfb9a7f.JPG/r0_0_5404_3602_w1200_h678_fmax.jpg"
                        alt="Disadvantage" width={400} height={200} /><br />
                    - Have a lot of money to buy it<br />
                    - Change the windshield if it cracks<br />
                    - Remember where you parked<br />
                    - Keep up with the Services (oil, filter, brakes, belts) and fix any mechanical failures not covered
                    by warranty<br />
                    - You might get a traffic/parking ticket<br />
                </div>
            </div>
        );
    }
};