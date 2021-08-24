
import 'ol/ol.css'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import View from 'ol/View'
import { TileArcGISRest } from 'ol/source'
import { fromLonLat } from 'ol/proj'
const mapctx = {
  async initmap() {
    const url = 'http://localhost:6080/arcgis/rest/services/' + 'towncompact/MapServer'
    const layers = [
      new TileLayer({
        source: new TileArcGISRest({
          url: url
        })
      })
    ]
    const map = new Map({
      layers: layers,
      target: 'container',
      view: new View({
        center: fromLonLat([121.435, 31.239]),
        zoom: 10
      })
    })
    return { map }
  }
}
export default mapctx
