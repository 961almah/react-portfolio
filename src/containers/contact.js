import React from 'react';
import Card from '../components/contactCard.js'
import './contact.css'

const Contacts = () => {
    return (
        <div className="container" id="contact">
            <div className="card">
                <div className="card-body">
                    <div className="col-md-12">
                        <h1>Contact</h1>
                    </div>
                    <div className="row">
                        <Card link={"https://github.com/961almah"} linkName={"Github"} name={"GITHUB"} description={"You may find much of my work on Github. Code for the projects linked on this website are available there"} />
                    </div>
                    <div className="row">
                        <Card link={"https://www.linkedin.com/in/ali-mahmoud-6283b6b3/"} linkName={"LinkedIn"} name={"LINKEDIN"} description={"Let's connect! The following link takes you to my LinkedIn. Find me there."} />
                    </div>
                    <div className="row">
                        <Card link={"https://docs.google.com/document/d/1UvA4-l_v-b-q3N0cDjbbrIAGjNIZip6FIY_mGtvoflk/edit#"} linkName={"CV"} name={"CV"} description={"Learn more about me on my CV!"} />
                    </div>
                </div>
            </div>
            <hr />
        </div>)
}

export default Contacts;