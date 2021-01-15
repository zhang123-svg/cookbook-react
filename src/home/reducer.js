import { CHANGESWITCH } from './actionTypes'


const defaultState = {
    //这样不可以，因为存的是字符串，所以一直都是true
    //checked: localStorage.getItem('checked')
    
    //简单粗暴的方法1:
    //checked: localStorage.getItem('checked') === 'true' ? true : false
    //方法2： JSON.parse()
    checked: JSON.parse(localStorage.getItem('checked'))
}

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case CHANGESWITCH:
            return {
                checked: action.checked
            }
        default:
            return state
    }
}

export default reducer