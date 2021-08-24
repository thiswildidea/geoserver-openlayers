import db from '@/utils/localstorage'
import { getLanguage } from '@/lang/index'

export default {
  namespaced: true,
  state: {
    language: getLanguage(),
    maploaded: db.get('MAPLOADED', false),
    map: db.get('MAP', null)
  },
  mutations: {
    setLanguage: (state, language) => {
      db.save('LANGUAGE', language)
      state.language = language
    },
    setMapLoaded: (state, maploaded) => {
      db.save('MAPLOADED', maploaded)
      state.maploaded = maploaded
    },
    setMap: (state, map) => {
      db.save('MAP', map)
      state.map = map
    }
  }
}
