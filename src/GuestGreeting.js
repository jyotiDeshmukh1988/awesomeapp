import React from 'react'
import './card.css'
const GuestGreeting = () => {
    return <>
        <h2>Guest Greeting</h2>
        <div className="card">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
            <div className="container">
                <h4><b>Hi Guest,John Doe</b></h4> 
                <p>Architect & Engineer</p> 
            </div>
        </div>
    </>
}

export default GuestGreeting