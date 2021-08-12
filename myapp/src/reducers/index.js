const events = (state = [], action) => {
    switch(action.type){
        case 'CREATE_EVENT':
            const event = {title:action.title, body: action.body}
            const lenght = state.length
            let id = length === 0 ? id = 1 : id.state[length -1].id + 1
            return [...state, {id:id,...event}]
        case 'DELETE_EVENT':
            return state
        case 'DELETE_ALL_EVENTS':
            return []
        default:
            return state
    }
}

export default events