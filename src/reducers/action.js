
// 常量修改
export function setPageTitle (data) {
    return (dispatch) => {
        dispatch({ type: 'SET_PAGE_TITLE', data: data })
    }
}
