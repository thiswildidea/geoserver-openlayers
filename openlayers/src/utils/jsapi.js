import esriLoader from 'esri-loader'
// const pathRegex = new RegExp(/\/[^\/]+$/)
// const locationPath = location.pathname.replace(pathRegex, '')
const dojoConfig = {
  async: true,
  packages: [{
    // location: locationPath + '/arcgis/utils',
    // location: 'http://idea.gis.com/map23d/arcgis/utils',
    location: 'http://10.221.1.181:8080/mapcontrol/arcgis/utils',
    name: 'utils'
  }, {
    // location: locationPath + '/arcgis/extensions',
    // location: 'http://idea.gis.com/map23d/arcgis/extensions',
    location: 'http://10.221.1.181:8080/mapcontrol/arcgis/extensions',
    name: 'extensions'
  }],
  deps: ['@dojo/framework/shim/main'],
  has: {
    'esri-promise-compatibility': 1,
    'esri-featurelayer-webgl': 1
  }
}

function configEsriLoader() {
  esriLoader.utils.Promise = Promise
}

export default function load(modules, jsApiUrl) {
  configEsriLoader()
  return esriLoader.loadModules(modules, {
    dojoConfig,
    url: jsApiUrl
  })
}
