import React, { useState, useEffect } from "react";


export const Block = (props) => <button href="https://google.com">{props.text}</button>

export const Home = (props) => {
    const [profile, setProfile] = useState({
        person: "Justin Rice"
    })
    return <h1>Hello {profile.person} from the home page <Block text="Click here" /></h1>
}

