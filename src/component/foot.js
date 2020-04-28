import React, { Component } from "react";
export default class head extends Component {
    render() {
        return(
            <div>
                <div>
                    <label for="name">Name</label>
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

                <h1>Copyright by H.M.P</h1>
            </div>

        )
    }
}
    