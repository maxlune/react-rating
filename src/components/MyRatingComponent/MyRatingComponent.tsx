import React from 'react'
import RatingButton from '../RatingButton';
import { RatingButtonProps } from '../RatingButton/RatingButton';
import RatingContent from '../RatingContent';
import { RatingContentProps } from '../RatingContent/RatingContent';
import RatingRadio from '../RatingRadio';
import './MyRatingComponent.css';
// @ts-ignore
import IconStar from '../../assets/images/icon-star.svg'
import { RatingRadioProps } from '../RatingRadio/RatingRadio';

type RatingProps = RatingContentProps & RatingButtonProps & RatingRadioProps;

const MyRatingComponent = ({contentTitle, contentText, labelButton, ratingCount}: RatingProps) => {
  return (
    <div className='rating-card'>
      <div>
        <IconStar />
      </div>
      <RatingContent contentTitle={contentTitle} contentText={contentText} />
      <RatingRadio ratingCount={ratingCount}/>
      <RatingButton labelButton={labelButton} />
    </div>
  )
}

export default MyRatingComponent;