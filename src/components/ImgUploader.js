import React from "react";
import ImageUploader from "react-images-upload";

export class ImgUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  render() {
    // const imgurl = URL.createObjectURL(this.state.pictures[0]);
    // console.log(`imgurl`, imgurl);
    // console.log(`this.state.pictures[0]`, this.state.pictures[0]);
    return (
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={this.onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
    );
  }
}
