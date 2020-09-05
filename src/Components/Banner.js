import React, {useState} from 'react'
import { Button } from '@material-ui/core'
import DatePicker from './DatePicker'
import { useHistory } from 'react-router-dom'
import './Styles/Banner.css'

function Banner() {

    const history = useHistory()
    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className="banner">
            <div className="banner__search">
                <Button onClick={() => {setShowSearch(!showSearch)}} 
                        variant="outlined" 
                        className="banner__searchButton">
                {showSearch ? 'Hide' : 'Search Dates' }   
                </Button>
                {showSearch && <DatePicker/> }
            </div>            
            <div className="banner__info">
                <h1>Get out and strech your imagination</h1>
                <h5>
                    Plan a different kind of 
                    getaway to uncover the 
                    hidden gems near you
                </h5>
                <Button onClick={() => history.push('/search')}>Explore nearby</Button>
            </div>
        </div>
    )
}

export default Banner
