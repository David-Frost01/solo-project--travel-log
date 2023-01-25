import React from "react"
import Navbar from "./Navbar.js"
import Card from "./Card.js"
import data from "./data.js"

const cards = data.map(item => {
    return <Card 
        key={item.id}
        item={item}
    />
})

export default function App() {
    return (
        <div>
            <Navbar />
            {cards}
        </div>
    )
}

