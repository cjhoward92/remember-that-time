import React from 'react'
import { connect } from 'react-redux'
import { addPhoto } from '../actions'
import { PhotoItem } from '../types'

class AddPhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: ''
    }
  }
  render() {
    let fileInput
    let titleInput

    return (
      <div>
        <form className="image-form" onSubmit={e => {
          e.preventDefault()

          if (!fileInput.value.trim()) {
            return
          }
          if (!titleInput.value.trim()) {
            return
          }
          const src = fileInput.value
          const title = titleInput.value

          renderer.copyFileToUserFolder(src, title)
            .then(() => {

              this.props.dispatch(addPhoto({
                src,
                title,
                isSelected: false
              }))
              fileInput.value = ''
              titleInput.value = ''
            })
            .catch((err) => {
              this.setState({
                errorMessage: err.message
              })
            })
        }}>
          <span>{this.state.errorMessage}</span>
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
              })
            }}>
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
}

const AddPhotoExt = connect()(AddPhoto)

export default AddPhotoExt