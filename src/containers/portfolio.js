import React from 'react';
import PortfolioCard from '../components/portfolioCard.js';
import './portfolio.css';

const Portfolio = () => {
    return (
        <div class="container" id="portfolio">
            <div class="card">
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4">
                        <PortfolioCard image={"Screenshot(38).png"} imageAlt={"Code Quiz"} name={"Code Quiz"} description={"Welcome to Code Quiz! Users can enjoy a quick general knwoledge quiz about coding-related topics. Watch for that timer and put your name on top of that High Score page!"} link={"https://961almah.github.io/code-quiz/"} linkName={"Go to Code Quiz"} />
                    </div>
                </div>
            </div>
            <hr />
        </div>)
}

export default Portfolio;