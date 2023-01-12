import React from 'react'

export interface RatingContentProps {
  contentTitle: string;
  contentText: string;
}

const RatingContent = ({contentTitle, contentText}: RatingContentProps) => {
  return (
    <div>
      <h1>{contentTitle}</h1>
      <p>{contentText}</p>
    </div>
  )
}

export default RatingContent;