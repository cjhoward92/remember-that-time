// @flow

import React, { Element } from 'react';
import PropTypes from 'prop-types';
import type { PhotoItem } from '../types';

type InnerProps = {
    item: PhotoItem,
    onClick: Function
}

const Photo = (props: InnerProps): Element<any> => (
  <li
    className={'photo'} 
    onClick={() => props.onClick(props.item)}
  >
    <div className={(props.item.isSelected ? 'selected-photo' : '')}>
      <img src={(`file:///${props.item.src}`)} title={props.item.title} alt={props.item.title} />
    </div>
  </li>
);

Photo.propTypes = {
  item: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isSelected: PropTypes.boolean.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Photo;
