import { createStore } from 'redux'
import {heroReducer} from '../Reducer/heroReducer'

const store = createStore(
    heroReducer
)
export default store