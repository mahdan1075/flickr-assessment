import { put, call } from 'redux-saga/effects';
import { flickrImages } from '../api/flickr';
import * as types from '../constants/actionTypes';

export function* searchMediaSaga({ payload }) {
  try {
    const images = yield call(flickrImages, payload);
    yield [
      put({ type: types.FLICKR_IMAGES_SUCCESS, images }),
      put({ type: types.SELECTED_IMAGE, image: images[0] })
    ];
  } catch (error) {
    yield put({ type: 'SEARCH_MEDIA_ERROR', error });
  }
}
