import consts from '../constants'
const posts = (state = [], action) => {
    switch (action.type) {
        case consts.ADD_POST :
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    postCategory: action.category
                }
            ];
        case consts.REMOVE_POST://maybe filter instead of map
            return state.map(post =>
                (post.id === action.id)
                    ? {...post, completed: !post.completed}
                    : post
            );
        case consts.UPDATE_POST:// an update is when user wants to update existing posts he/she made
            return state.map(post =>
                (post.id === action.id)
                    ? {...post, completed: !post.completed}
                    : post
            );
        case consts.POST_REVISION://revision is when someone who did not write post suggests a revision for improvements
            return state.map(post =>//add revision array to original post object
                (post.id === action.id)
                    ? {...post, completed: !post.completed}
                    : post
            );
        default:
            return state
    }
};

export default posts
