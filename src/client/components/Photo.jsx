// @flow

import React, { PropTypes, Element } from 'react';
import type { PhotoItem } from '../types'

type InnerProps = {
    item: PhotoItem,
    onClick: Function
}

const Photo = (props: InnerProps): Element<any> => (
    <li className={"photo " + (props.item.isSelected ? 'selected-photo' : '')} 
        onClick={()=>props.onClick(props.item)}>
        <img src={("file:///") + props.item.src} title={props.item.title} />
    </li>
)

Photo.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Photo