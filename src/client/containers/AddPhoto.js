import React from 'react'
import { connect } from 'react-redux'
import { addPhoto } from '../actions'
import { PhotoItem } from '../types'

let AddPhoto = ({ dispatch }) => {
  let fileInput
  let titleInput

  return (
    <div>
      <form className="form" onSubmit={e => {
        e.preventDefault()
        
        if (!fileInput.value.trim()) {
          return
        }
        const fileName = fileInput.value
        console.log(fileName)

        if (!titleInput.value.trim()) {
            return
        }
        dispatch(addPhoto({
            src: fileName,
            title: titleInput.value,
            isSelected: false
        }))
        fileInput.value = ''
        titleInput.value = ''
      }}>
        <div className="form-group col-lg-3">
          <label htmlFor="source">File</label>
          <input className="form-control" name="source" type="file" ref={node => {
            fileInput = node
          }} />
        </div>
        <div className="form-group col-lg-3">
          <label htmlFor="title">Title</label>
          <input className="form-control" name="title" type="text" ref={node => {
            titleInput = node
          }} />
        </div>
        <button type="submit" className="btn btn-default">
          Add Photo
        </button>
      </form>
    </div>
  )
}
AddPhoto = connect()(AddPhoto)

export default AddPhoto