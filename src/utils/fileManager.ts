import { levelType } from '../types'

const download = (allLevels: levelType[]) => {
  const difficulty = (allLevels[0].difficulty)
  const element = window.document.createElement('a')
  element.setAttribute('href', 'data:json;charset=utf-8,' + encodeURIComponent(JSON.stringify(allLevels, null, 4)))
  element.setAttribute('download', difficulty + '.json')
  element.style.display = 'none'
  window.document.body.appendChild(element)
  element.click()
  window.document.body.removeChild(element)
}

const createIndex = (level: levelType) => {
  let binaryId = ''
  level.rows.forEach((row) => {
    binaryId += row.config
  })
  return parseInt(binaryId, 2).toString()
}

export { createIndex, download }
