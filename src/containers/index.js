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
    this.props.dispatch(searchMediaAction('British'));
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
        {images && selectedImage? <div>
          <input
            type="text"
            ref={ref => (this.query = ref)}
            className="title"
          />
          <button
            type="submit"
            onClick={this.handleSearch}
          >
            <Icon name="search" /> Search Library
          </button>
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
