import React from 'react'
import Card from './Card'
import Banner from './Banner'
import "./Styles/Home.css"
import "./Styles/HomeCard.css"

function Home() {
    return (
        <div className="home">
            <Banner/>
            <div className="home__section">
                <Card 
                    type="home__card"
                    src="https://bit.ly/31FXFkS" 
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card 
                    type="home__card"
                    src="https://bit.ly/3b8g1hr"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card 
                    type="home__card"
                    src="https://bit.ly/2YI2YhF"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
            </div>
            <div className="home__section">
                <Card 
                    type="home__card"
                    rating
                    src="https://a0.muscache.com/im/pictures/24f19c4c-60c9-4761-aa65-1b14fbbc3bbb.jpg?aki_policy=xx_large"
                    title="Modern and Cozy Private Jr 1 Bedroom-416"
                    price="$53"
                />
                <Card 
                    type="home__card"
                    rating
                    src="https://a0.muscache.com/im/pictures/a4eee3b9-2530-47d3-8616-f732bd52724d.jpg?aki_policy=xx_large"
                    title="Green and sunny vintage WeHo home by Runyon Canyon"
                    price="$85"
                />
                <Card 
                    type="home__card"
                    rating
                    src="https://a0.muscache.com/im/pictures/36787809/161e2b23_original.jpg?aki_policy=xx_large"
                    title="Luxury Bright & Airy Industrial Loft Downtown LA"
                    price="$111"
                />
            </div>
            <div className="home__section">
                <Card 
                    type="home__card"
                    rating
                    src="https://a0.muscache.com/im/pictures/fdc63cf6-6a84-4588-b1bc-2f963671fc29.jpg?aki_policy=xx_large"
                    title="LA Hideaway"
                    price="$49"
                />
                <Card 
                    type="home__card"
                    rating
                    src="https://a0.muscache.com/im/pictures/49e89d20-c557-4e4b-97d5-b95e617aa04c.jpg?aki_policy=xx_large"
                    title="Comuna Factory Tiny Cedar Pagoda Room"
                    price="$48"
                />
                <Card 
                    type="home__card"
                    rating
                    src="https://a0.muscache.com/im/pictures/389b14d5-8604-4379-9f69-186174a71b07.jpg?aki_policy=xx_large"
                    title="Spacious 2BR Apartment in Westwood"
                    price="$76"
                />
            </div>
        </div>
    )
}

export default Home
