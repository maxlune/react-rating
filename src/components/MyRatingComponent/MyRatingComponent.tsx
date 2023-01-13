import React from 'react'
import RatingButton from '../RatingButton';
import { RatingButtonProps } from '../RatingButton/RatingButton';
import RatingContent from '../RatingContent';
import { RatingContentProps } from '../RatingContent/RatingContent';
import RatingRadio from '../RatingRadio';
import './MyRatingComponent.css';
import IconStar from '../../assets/images/icon-star.svg'

type RatingProps = RatingContentProps & RatingButtonProps;

const MyRatingComponent = ({contentTitle, contentText, labelButton}: RatingProps) => {
  return (
    <div className='rating-card'>
      <IconStar />
      <RatingContent contentTitle={contentTitle} contentText={contentText} />
      <RatingRadio />
      <RatingButton labelButton={labelButton} />
    </div>
  )
}

export default MyRatingComponent;