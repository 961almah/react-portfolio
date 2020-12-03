import React from 'react';
import Card from '../components/contactCard.js'

const Contacts = () => {
    return (<div className="container" id="main">
        <div className="card">
            <div className="card-body">
                <div className="col-md-12">
                    <h1>Contact</h1>
                </div>
                <div className="row">
                    <Card link={"https://www.google.com"} linkName={"Github"} name={"Github"} description={"im good at coding  hire me"} />
                </div></div></div></div>)
}

export default Contacts;