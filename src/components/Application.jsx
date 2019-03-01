import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

import './style.scss'

class Application extends Component {
  render() {
    return (
      <div>
        Scroll to load images.
        <div className="filler" />
        <div className="filler" />
        <LazyLoad height={732} offsetVertical={10}>
          <img
            src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg'
            alt='first one'
            style={{width:'100vw'}} />
        </LazyLoad>
        <div className="filler" />
        <div className="filler" />
        <LazyLoad height={683} offsetVertical={10}>
          <img
            src='http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg'
            alt='second one' />
        </LazyLoad>
        <div className="filler" />
        <div className="ScrollableContainer">
          <div className="filler" />
          <LazyLoad height={480}>
            <img
              src='http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif'
              alt='third one' />
          </LazyLoad>
        </div>
        <div className="filler" />
        <LazyLoad height={720} offsetVertical={10}>
          <img
            src='http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg'
            alt='fourth one' />
        </LazyLoad>
        <div className="filler" />
        <LazyLoad
          height={720}
          onContentVisible={() => console.log('look ma I have been lazyloaded!')}
        >
          <img
            src='http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg'
            alt='fifth one' />
        </LazyLoad>
      </div>
    );
  }
}

export default Application;