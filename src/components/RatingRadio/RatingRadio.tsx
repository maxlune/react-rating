import React from 'react'
import RatingButton from '../RatingButton';
import '../RatingRadio/RatingRadio.css'

export interface RatingRadioProps {
  ratingCount: number;
}

const RatingRadio = ({ ratingCount }: RatingRadioProps) => {
  const ratingArray = Array.from({length: ratingCount}, (v, k) => k+1)

  return (
    <div className='rating-radio'>
      {ratingArray.map((rating: number) => 
          (<div className='radio-box' key={rating}>
            <input type="radio" id={rating.toString()} value={rating} name="radio"/>
            <label htmlFor={rating.toString()}>{rating.toString()}</label>
          </div>)
      )}
    </div>
  )
}

export default RatingRadio;