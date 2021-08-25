
import 'ol/ol.css'
import store from '@/store/index'
import * as olProj from 'ol/proj'
import TileGrid from 'ol/tilegrid/TileGrid'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import TileWMS from 'ol/source/TileWMS'
import View from 'ol/View'
const mapctx = {
  async initmap() {
    const projection = olProj.get('EPSG:3857')
    const origin = [-2.0037508342787E7, 2.0037508342787E7]
    const fullExtent = [1.3453229952271476E7, 3591518.690105271, 1.3578020635878595E7, 3745753.867415652]
    const resolutions = [156543.03392800014, 78271.51696399994, 39135.75848200009, 19567.87924099992,
      9783.93962049996, 4891.96981024998, 2445.98490512499, 1222.992452562495, 611.4962262813797, 305.74811314055756, 152.87405657041106, 76.43702828507324,
      38.21851414253662, 19.10925707126831, 9.554628535634155, 4.77731426794937, 2.388657133974685, 1.1943285668550503, 0.5971642835598172, 0.29858214164761665,
      0.14929107082380833, 0.07464553541190416, 0.03732276770595208, 0.01866138385297604]
    const tileGrid = new TileGrid({
      tileSize: 256,
      origin: origin,
      extent: fullExtent,
      resolutions: resolutions
    })

    const map = new Map({
      target: 'container',
      layers: [new TileLayer({
        source: new TileWMS({
          url: 'http://localhost:8080/geowebcache/service/wms',
          params: { 'LAYERS': 'town', format: 'image/png', SRS: 'EPSG:3857' },
          tileGrid: tileGrid
        })
      })],
      view: new View({
        center: [13519132, 3663233],
        resolutions: resolutions,
        resolution: 152.87405657041106,
        projection: projection,
        extent: fullExtent
      })
    })
    store.commit('setting/setMap_Loaded', true)
    return { map }
  }
}
export default mapctx
