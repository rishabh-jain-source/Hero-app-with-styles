import myHeroes from "../store/defaultValues"

export const heroReducer = (state=myHeroes, action) => {
    switch (action.type) {
        case 'EDIT_HERO':
            return state.map((hero) => {
                if (hero.id === action.id) {
                    return {
                        ...hero,
                        ...action.update
                    }
                } else {
                    return hero
                }
            })
        case 'ADD_HERO':
            return [
                ...state,
                action.hero
            ]
        case 'REMOVE_HERO':
            return state.filter(({ id }) => id !== action.id);
        default : return state
    }
}