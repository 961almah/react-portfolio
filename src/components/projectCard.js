import React from 'react';

const PortfolioCard = (props) => {
    return (
        <div class="col mb-4">
            <div class="card">
                <img src="Screenshot(264).png" class="card-img-top" alt="Picture of Natours" />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{{ props.description }}</p>
                    <a href={props.link} class="btn btn-primary btn-lg btn-block" role="button"
                        aria-pressed="true" target="_blank">{props.linkName}</a>
                </div>
            </div>
        </div>
    )
};

export default PortfolioCard;