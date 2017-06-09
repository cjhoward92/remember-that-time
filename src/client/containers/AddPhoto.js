import React from 'react'
import { connect } from 'react-redux'
import { addPhoto } from '../actions'
import { PhotoItem } from '../types'

let AddPhoto = ({ dispatch }) => {
  let fileInput
  let titleInput

  return (
    <div>
      <form className="image-form" onSubmit={e => {
        e.preventDefault()
        
        if (!fileInput.value.trim()) {
          return
        }
        const fileName = fileInput.value

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
        <div>
          <label htmlFor="source">File</label>
          <input name="source" type="text" readOnly="readonly" ref={node => {
            fileInput = node
          }} />
        </div>
        <div>
          <button onClick={e => {
            e.preventDefault();
            renderer.selectImage((file) => {
              if (file) {
                fileInput.value = file
              }
            })}}>
            Select Image
          </button>
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input name="title" type="text" ref={node => {
            titleInput = node
          }} />
        </div>
        <div>
          <button type="submit">
            Add Photo
          </button>
        </div>
      </form>
    </div>
  )
}
AddPhoto = connect()(AddPhoto)

export default AddPhoto