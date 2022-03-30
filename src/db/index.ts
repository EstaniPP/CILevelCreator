import { addNewLevel as addNewLevelF, getLevels as getLevelsF, deleteLevel as deleteLevelsF } from './firebase'
import { levelType } from '../types'

const addNewLevel = async (level : levelType) => {
  return addNewLevelF(level)
}

const getLevels = async (difficulty: string) => {
  return await getLevelsF(difficulty)
}

const deleteLevel = async (difficulty: string, id: number, levels: levelType[]) => {
  return await deleteLevelsF(difficulty, id, levels)
}
export { addNewLevel, getLevels, deleteLevel }
