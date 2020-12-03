import React from 'react'

const IndexCard = (props) => {
    return (
        <div class="container" id="main">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <img
                                pull
                                src={props.image}
                                class="mr-3 img-fluid"
                                alt={props.imageName}
                                id={props.imageID}
                            />
                        </div>
                        <div class="col-sm-8">
                            <div class="media-body text-wrap">
                                <h5 class="mt-0"></h5>{props.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default IndexCard;