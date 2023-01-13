import React from 'react'
import '../RatingButton/RatingButton.css'

export interface RatingButtonProps {
  labelButton?: string;
}

const RatingButton = ({labelButton}: RatingButtonProps) => {
  return <button type='submit'>{labelButton}</button>
}

export default RatingButton;