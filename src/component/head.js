import React, { Component } from "react";
export default class head extends Component {
    render() {
        return (
            <div>
                <h1>Cars Collection</h1>
                <div className="gallery">
                    <a target="_blank" href="" onclick="toggle()">
                        <img src="https://4.bp.blogspot.com/-T0ZqMFbT2Wg/Uohis7nuk7I/AAAAAAAAXh8/hohOAL5Mvg8/s1600/Opel-Car-Logo-Download-Free.jpg" alt="" width={600}
                            height={300} />
                    </a>
                    <div className="desc">
                        <a href="/Home" onclick="toggle()">
                           Home
                        </a>
                    </div>
                </div>
                <div className="gallery">
                    <a target="_blank" href="" onclick="toggle()">
                        <img src="https://logoxe.net/wp-content/uploads/2019/02/logo-lamborghini.jpg" alt="" width={600}
                            height={400} />
                    </a>
                    <div className="desc">
                        <a href="/Super" onclick="toggle()">
                           Super
                        </a>
                    </div>
                </div>
                <div className="gallery">
                    <a target="_blank" href="Luxurycar.html" onclick="toggle()">
                        <img src="https://logoxe.net/wp-content/uploads/2019/02/logo-bmw.jpg" alt="" width={600}
                            height={400} />
                    </a>
                    <div className="desc"><a href="/luxury" onclick="toggle()"><span>Luxury Cars</span></a>
                    </div>
                </div>
                <div className="gallery">
                    <a target="_blank" href="Ordinarycar.html" onclick="toggle()">
                        <img
                            src="https://2.bp.blogspot.com/-nXtpsovJkR0/UNMuanBp3RI/AAAAAAAAGAg/s32qQi97qBE/s1600/Honda+Logo+1.jpg"
                            alt="Northern Lights" width={600} height={400} />
                    </a>
                    <div className="desc"><a href="/ordinary" onclick="toggle()"><span>Ordinary Cars</span></a>
                    </div>
                </div>
            </div>
        )
    }
}