import { prototype } from 'postcss/lib/node'
import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import {AiFillHeart } from 'react-icons/ai'



const AllFaves = ({count, rating, colour, onFaves}) => {
    const [faveRating, setFaveRating] = useState(0)

    const getColor = index => {
        if(faveRating >= index) {
            return colour.filled;
        }else if(!faveRating && rating >= index){
            return colour.filled
        }

        return colour.unFilled
    }
    const heartRate = useMemo(() => {

        return Array(count)
        .fill(0)
        .map((_, i) => i)
        .map(_, id=> {
            <AiFillHeart
            key={id}
            className="cursor-pointer"
            icon="heart"
            onClick={() => onFaves(id)}
            onMouseEnter={() => setFaveRating(id)}
            onMouseLeave={() => setFaveRating(0)}
            />
        })

    }, [count, rating])
  return (
    <div>

    </div>
  )

  AllFaves.propTypes = {
    count: PropTypes.number,
    rating: PropTypes.number,
    onChange: PropTypes.number,
    colour: {
        filled: PropTypes.string,
        unFilled: PropTypes.string,
    }
}

AllFaves.defaultProps = {
    count: {},
    rating: 0,
    colour: {
        filled: "#a07e96",
        unFilled:"#868686"
    }
}
}

export default AllFaves

