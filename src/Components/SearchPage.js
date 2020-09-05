import React from 'react'
import { Button } from '@material-ui/core'
import Card from './Card'
import './Styles/SearchPage.css'
import "./Styles/SearchCard.css"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>xx stays nearby · xx to xx month · x guest</p>
                <h1>Stays Nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More Filters</Button>
                <hr/>
                <Card 
                    rating
                    subtitle="Entire apartment in Santa Monica"
                    type="search__card"
                    src="https://a0.muscache.com/im/pictures/24f19c4c-60c9-4761-aa65-1b14fbbc3bbb.jpg?aki_policy=xx_large"
                    title="Modern and Cozy Private Jr 1 Bedroom-416"
                    description="3 guests · Studio · 2 beds · 1 bath"
                    description2="Wifi · Free Parking · Kitchen · Air conditioning"
                    price="$53"
                /> 
                <hr/>
                <Card 
                    rating
                    subtitle="Entire apartment in Hollywood"
                    type="search__card"
                    src="https://a0.muscache.com/im/pictures/a4eee3b9-2530-47d3-8616-f732bd52724d.jpg?aki_policy=xx_large"
                    title="Green and sunny vintage WeHo home by Runyon Canyon"
                    description="4 guests · 1 bedroom · 3 beds · 1 bath"
                    description2="Wifi · Kitchen · Air conditioning"
                    price="$85"
                />
                <hr/>
                <Card 
                    rating
                    subtitle="Entire loft Downtown"
                    type="search__card"
                    src="https://a0.muscache.com/im/pictures/36787809/161e2b23_original.jpg?aki_policy=xx_large"
                    title="Luxury Bright & Airy Industrial Loft Downtown LA"
                    description="2 guests · 1 bedroom · 1 bed · 1 bath"
                    description2=""
                    price="$111"
                />
                <hr/>
                <Card 
                    rating
                    subtitle="Entire guesthouse in East Los Angeles"
                    type="search__card"
                    src="https://a0.muscache.com/im/pictures/fdc63cf6-6a84-4588-b1bc-2f963671fc29.jpg?aki_policy=xx_large"
                    title="LA Hideaway"
                    description="2 guests · Studio · 1 bed · 1 bath"
                    description2="Wifi · Kitchen · Air conditioning"
                    price="$49"
                />
                <hr/>
                <Card 
                    rating
                    subtitle="Private room in Los Angeles"
                    type="search__card"
                    src="https://a0.muscache.com/im/pictures/49e89d20-c557-4e4b-97d5-b95e617aa04c.jpg?aki_policy=xx_large"
                    title="Comuna Factory Tiny Cedar Pagoda Room"
                    description="2 guests · 1 bedroom · 1 bed · 1 shared bath"
                    description2="Wifi · Kitchen"
                    price="$48"
                />
                <hr/>
                <Card 
                    rating
                    subtitle="Entire apartment in Westwood"
                    type="search__card"
                    src="https://a0.muscache.com/im/pictures/389b14d5-8604-4379-9f69-186174a71b07.jpg?aki_policy=xx_large"
                    title="Spacious 2BR Apartment in Westwood"
                    description="2 guests · 2 bedrooms · 2 beds · 1 bath"
                    description2="Wifi · Free Parking · Kitchen · Air conditioning"
                    price="$76"
                />
            </div>
        </div>
    )
}

export default SearchPage
