
const initialState = {
    people: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADDPERSON') {
        return {
            people: state.people.concat(action.person)
        }
    }
    if (action.type === 'DELETEPERSON') {
        const newArr = state.people.filter(element => element.id !== action.id)
        return {
            people: newArr
        }
    }
    return state;
}

export default reducer;