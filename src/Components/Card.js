import React, { useState } from 'react'
import StarIcon from '@material-ui/icons/Star'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'


function Card({type, src, rating, title, subtitle, description, description2, price}) {

    const [favorite, setFavorite] = useState(false)

    const handleClick = () =>{
        setFavorite(!favorite)
    }

    return (
        <div className={type}>
            <img src={src} alt=""/>
            <div className="card__info">
                {rating && 
                    <div className="rating"> 
                        <StarIcon className="icon"/> <p>New</p>
                    </div>
                }
                <h4>{subtitle}</h4>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h4>{description2}</h4>
                {description2 && 
                    <button className="favorite__button" onClick={handleClick}>
                        {favorite ? <FavoriteIcon style={{color: "rgb(255, 56, 92)"}}/> : <FavoriteBorderIcon/>}
                    </button>
                }
                {price && <h3>{price}<span>/ night</span></h3>}
            </div>
        </div>
    )
}

export default Card
