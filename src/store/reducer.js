import { combineReducers } from 'redux'


import { 
    reducer as cookbook 
} from '../home/cookbook/index'

import { 
    reducer as home 
} from '../home/index'

import { 
    reducer as category 
} from '../home/category/index'

const reducer =  combineReducers({
    cookbook: cookbook,
    home,
    category
})
export default reducer