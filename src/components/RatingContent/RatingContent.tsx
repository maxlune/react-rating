import React from 'react'

export interface RatingContentProps {
  contentTitle: string;
  contentText: string;
}

const RatingContent = ({contentTitle, contentText}: RatingContentProps) => {
  return (
    <>
      <h1>{contentTitle}</h1>
      <p>{contentText}</p>
    </>
  )
}

export default RatingContent;