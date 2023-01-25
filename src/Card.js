import React from "react"

export default function Card(props) {
    return (
        <div className="card-container">
            <img src={props.item.imageUrl} className="card-img"/>
            <div className="card-text">
                <div className="card-location">
                    <p className="card-location-name">{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} className="card-location-link">
                        View on Google Maps
                    </a>
                </div>
                <h1 className="card-title">{props.item.title}</h1>
                <p className="card-dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    )
}