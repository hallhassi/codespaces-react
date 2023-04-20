export default function stateReducer(state, action) {
    switch (action.type) {
        case 'changed_section': {
            return state.map((section) => {
                if (section.id === action.id) {
                    return {
                        ...section,
                        on: 1
                    }
                } else
                    return {
                        ...section,
                        on: 0
                    }
            })
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}