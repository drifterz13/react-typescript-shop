import * as React from 'react'
import firebase from '../firebaase'
import FileUploader from 'react-firebase-file-uploader'
import { Flex, PreviewImage } from '../elements'

type State = {
  progress: number
  isUploading: boolean
  imageURL: string
}

const initialState = {
  progress: 0,
  isUploading: false,
  imageURL: ''
}

export default class Uploader extends React.PureComponent<{}, State> {
  state = { ...initialState }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 })
  handleProgress = progress => this.setState({ progress })
  handleUploadError = error => {
    this.setState({ isUploading: false })
    console.error(error)
  }
  handleUploadSuccess = filename => {
    this.setState({ progress: 100, isUploading: false })
    firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ imageURL: url }))
  }

  render() {
    return (
      <Flex column>
        <h1>Upload Image</h1>
        {this.state.imageURL && <PreviewImage src={this.state.imageURL} />}
        <FileUploader
          accept='image/*'
          name='avatar'
          randomizeFilename
          storageRef={firebase.storage().ref('images')}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
        />
      </Flex>
    )
  }
}
