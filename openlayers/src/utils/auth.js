import db from '@/utils/localstorage'

export function getToken() {
  return db.get('MAP_TOKEN', '')
}
