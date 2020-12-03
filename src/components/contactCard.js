import React from 'react'

const Card = (props) => {
    return (<div className="col-sm-6">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="btn btn-primary info-box" target="_blank">{props.linkName}</a>
            </div>
        </div>
    </div>)
};

export default Card;