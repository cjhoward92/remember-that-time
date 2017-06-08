// @flow

import React, { PropTypes, Element } from 'react';
import Photo from './Photo.jsx'
import type { PhotoItem } from '../types'

type InnerProps = {
    photos: Array<PhotoItem>,
    onSelectPhoto: Function
}

const Photolist = (props: InnerProps): Element<any> => (
    <ul className="photolist">
        {props.photos.map((p: PhotoItem, i: number) => {
            return <Photo item={p} key={i} onClick={props.onSelectPhoto} />
        })}
    </ul>
)

export default Photolist