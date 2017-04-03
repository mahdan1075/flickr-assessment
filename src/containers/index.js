import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {Icon} from 'react-fa'
import { selectImageAction, searchMediaAction } from '../actions/mediaActions';
import MainImage from '../components/mainImage/index';
import Thumbnails from '../components/thumbnails/index';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
  }

 componentDidMount() {
    this.props.dispatch(searchMediaAction('Development'));
  }

  handleSelectImage(selectedImage) {
    this.props.dispatch(selectImageAction(selectedImage));
  }

  handleSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
      this.props.dispatch(searchMediaAction(this.query.value));
      this.query.value = '';
    }
  }

  render() {
    const { images, selectedImage } = this.props;
    return (
      <div className="container">
        <h1 className="h1">Gallery</h1>
        {images && selectedImage?
        <div>
          <div className="search">
            <input
              type="text"
              ref={ref => (this.query = ref)}
              className="search_box"
              placeholder="search Flickr"
            />
            <button
              type="submit"
              onClick={this.handleSearch}
              className="search_button"
            >
              <Icon name="search" /> Search
            </button>
          </div>
          <div>
            <MainImage selectedImage={selectedImage} />
            <Thumbnails
              images={images}
              onHandleSelectImage={this.handleSelectImage}
            />
          </div>
        </div> : 'loading ....'}
      </div>
    );
  }
}

App.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ images, videos }) => ({
  images: images[0],
  selectedImage: images.selectedImage
});

export default connect(mapStateToProps)(App);
