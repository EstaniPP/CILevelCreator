import { addNewLevel as addNewLevelF, getLevels as getLevelsF } from './firebase'
import { levelType } from '../types'

const addNewLevel = async (level : levelType) => {
  return addNewLevelF(level)
}

const getLevels = async (difficulty: string) => {
  return await getLevelsF(difficulty)
}

export { addNewLevel, getLevels }
