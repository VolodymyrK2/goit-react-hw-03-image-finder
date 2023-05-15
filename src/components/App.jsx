import { Component } from "react";
import css from './App.module.css'
import SearshBar from "./SearshBar/SearshBar";
import ImageGallery from "./ImageGallery/ImageGallery";
class App extends Component {
  state = {
    imageName: ''
  }
  handleImageName = (imageName) => {
    this.setState({
      imageName:imageName
    })
  }
  render() {
    return (
      <div className={css.app}>
        <SearshBar onSubmit={this.handleImageName} />
        <ImageGallery
          imageName={this.state.imageName}
        />
      </div>
    );
  }
};
export default App;