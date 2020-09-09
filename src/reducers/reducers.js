// 它就是将来真正要用到的数据，我们将其统一放置在reducers.js文件
import {combineReducers} from 'redux'
import defaultState from './state.js'

function pageTitle (state = defaultState,action) {
// 不同的action有不同的处理逻辑
    switch (action.type) {
        case 'SET_PAGE_TITLE':
            return  action.data
        default:
            return defaultState.pageTitle
    }
}

export default combineReducers({
    pageTitle,
})