export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_ANNOUN':
            return {
                ...state,
                announs: state.announs.filter(announ => {
                    return announ.id !== action.payload;
                })
            }
        case 'ADD_ANNOUN':
            return {
                ...state,
                announs: [action.payload, ...state.announs]
            }
        case 'EDIT_ANNOUN':
            const updateAnnoun = action.payload;

            const updateAnnouns = state.announs.map(announ => {
                if (announ.id === updateAnnoun.id) {
                    return updateAnnoun;
                }
                return announ;
            })
            return {
                ...state,
                announs: updateAnnouns
            }
        default:
            return state;
    }
}
