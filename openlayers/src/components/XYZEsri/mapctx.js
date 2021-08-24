
import 'ol/ol.css'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import View from 'ol/View'
import XYZ from 'ol/source/XYZ'
import { fromLonLat } from 'ol/proj'
const mapctx = {
  async initmap() {
    const map = new Map({
      target: 'container',
      layers: [
        new TileLayer({
          source: new XYZ({
            attributions:
              'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
              'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
            url:
              'http://localhost:6080/arcgis/rest/services/' +
              'towncompact/MapServer/tile/{z}/{y}/{x}'
          })
        })
      ],
      view: new View({
        center: fromLonLat([121.435, 31.239]),
        zoom: 12
      })
    })
    return { map }
  }
}
export default mapctx
