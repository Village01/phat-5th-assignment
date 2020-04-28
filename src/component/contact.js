import React, { Component } from "react";
import './styleluxury.css'
export default class Luxury extends Component {
    render() {
        return(
            <div>
                <div>
                    <label for="name">name</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label for="Email">Email</label>
                    <input type="text" name="email" />
                </div>
                <div>
                    <label for="Message">Message</label>
                    <textarea name="message" cols="50" rows="20" />
                </div>
                <button type="submit">Send</button>
            </div>
        )
    }
}