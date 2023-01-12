import React from 'react'

export interface RatingButtonProps {
  labelButton?: string;
}

const RatingButton = ({labelButton}: RatingButtonProps) => {
  return (
    <div>
      <button type='submit'>{labelButton}</button>
    </div>
  )
}

export default RatingButton;