
const initialState = {
    list: [],
    selectedId: null,
}
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList,
            }
        }
        default:
            return state;
    }
};
export default taskReducer;