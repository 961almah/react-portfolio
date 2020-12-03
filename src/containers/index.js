import React from 'react';
import IndexCard from '../components/indexCard.js'
import './index.css'

const Index = () => {
    return (
        <div class="container" id="main">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <IndexCard image={"photo-a.jpg"} imageName={"Image of Ali"} imageID={"image"} description={"I am a Full Stack Software Developer and a Computer Science studentat Columbia Engineering. Before this, I studied Finance and Chemistry at CUNY's Baruch College. I also worked at an Italian restaurant in Gramercy Park for a while, and lead a team  Lebanese restaurant before that.  I focus on JavaScript. I am comfortable working the MERN stack, HTML, CSS  and their frameworks and much more. Currently found around New City."} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;