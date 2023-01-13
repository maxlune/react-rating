import React from 'react'
import RatingButton from '../RatingButton';
import { RatingButtonProps } from '../RatingButton/RatingButton';
import RatingContent from '../RatingContent';
import { RatingContentProps } from '../RatingContent/RatingContent';
import RatingRadio from '../RatingRadio';
import './MyRatingComponent.css';

type RatingProps = RatingContentProps & RatingButtonProps;

const MyRatingComponent = ({contentTitle, contentText, labelButton}: RatingProps) => {
  return (
    <div className='rating-card'>
      <div className='icon-star'>
        <img src="src\assets\images\icon-star.svg" alt="icon-star" />
      </div>
      <div className='rating-content'>
        <RatingContent contentTitle={contentTitle} contentText={contentText} />
      </div>
      <div className='rating-radio'>
        <RatingRadio />
      </div>
      <div className='rating-button'>
        <RatingButton labelButton={labelButton} />
      </div>
    </div>
  )
}



export default MyRatingComponent;