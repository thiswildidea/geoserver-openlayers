
import 'ol/ol.css'
import Map from 'ol/Map'
import OSM from 'ol/source/OSM'
import TileLayer from 'ol/layer/Tile'
import View from 'ol/View'
import WMTS from 'ol/source/WMTS'
import WMTSTileGrid from 'ol/tilegrid/WMTS'
import { get as getProjection } from 'ol/proj'
import { getTopLeft, getWidth } from 'ol/extent'

const mapctx = {
  async initmap() {
    const projection = getProjection('EPSG:3857')
    const projectionExtent = projection.getExtent()
    const size = getWidth(projectionExtent) / 256
    const resolutions = new Array(24)
    const matrixIds = new Array(24)
    for (let z = 0; z < 24; ++z) {
      resolutions[z] = size / Math.pow(2, z)
      matrixIds[z] = z
    }
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
          opacity: 1
        }),
        new TileLayer({
          opacity: 1,
          source: new WMTS({
            attributions:
              'Tiles © <a href="https://services.arcgisonline.com/arcgis/rest/' +
              'services/Demographics/USA_Population_Density/MapServer/">ArcGIS</a>',
            url:
              'http://localhost:6080/arcgis/rest/services/towncompact/MapServer/WMTS',
            // layer: '0',
            matrixSet: 'EPSG:3857',
            format: 'image/png',
            projection: projection,
            tileGrid: new WMTSTileGrid({
              origin: [-2.0037508342787E7, 2.0037508342787E7],
              resolutions: resolutions,
              tileSize: 256,
              matrixIds: matrixIds
            })
          })
        })
      ],
      target: 'container',
      view: new View({
        center: [13519132, 3663233],
        zoom: 10
      })
    })
    return { map }
  }
}
export default mapctx
