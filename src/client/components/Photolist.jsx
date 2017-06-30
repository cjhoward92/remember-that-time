// @flow

import React, { Element } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo.jsx';
import type { PhotoItem } from '../types';

type InnerProps = {
    photos: Array<PhotoItem>,
    onSelectPhoto: Function
}

const Photolist = (props: InnerProps): Element<any> => (
  <ul className="photolist">
    {props
      .photos
      .map((p: PhotoItem) => <Photo item={p} key={`key${p.title.replace(' ', '')}`} onClick={props.onSelectPhoto} />)
    }
  </ul>
);

export default Photolist;
