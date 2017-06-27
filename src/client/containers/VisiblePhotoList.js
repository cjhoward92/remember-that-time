// @flow

import { connect } from 'react-redux'
import Photolist from '../components/Photolist.jsx'
import { selectPhoto } from '../actions'
import type { PhotoItem, State } from '../types'

const mapStateToProps = (state: State) => {
  return {
    photos: state.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectPhoto: (photo: PhotoItem) => {
      dispatch(selectPhoto(photo))
    }
  }
}

const VisiblePhotoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Photolist)

export default VisiblePhotoList