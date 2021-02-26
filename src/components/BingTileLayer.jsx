import { PropTypes } from 'react';
import { BaseTileLayer } from 'react-leaflet';

require('leaflet-plugins/layer/tile/Bing.js');

export default class BingTileLayer extends BaseTileLayer {
  static propTypes = {
    bingKey: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  componentWillMount() {
    super.componentWillMount();
    this.leafletElement = new L.BingLayer(this.props.bingKey, {type: this.props.type});
  }
}