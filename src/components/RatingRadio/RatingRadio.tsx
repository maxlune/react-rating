import React from 'react'
import '../RatingRadio/RatingRadio.css'

const RatingRadio = () => {
  return (
    <div>
      <input type="radio" id="1" name="radio"/>
      <label htmlFor="1" >1</label>
      <input type="radio" id="2" name="radio"/>
      <label htmlFor="2">2</label>
      <input type="radio" id="3" name="radio"/>
      <label htmlFor="3">3</label>
      <input type="radio" id="4" name="radio"/>
      <label htmlFor="4">4</label>
      <input type="radio" id="5" name="radio"/>
      <label htmlFor="5">5</label>
    </div>
  )
}

export default RatingRadio;