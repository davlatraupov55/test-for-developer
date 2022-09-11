import { loading, setPost, setPhotos, setUsers } from './actionType';


const initialState = {
    isLoaded: true,
    posts: [{ id: 1, title: 'title' }],
    users: [{ id: 1, company: { name: 'name' } }],
    photos: [{ albumId: 1, url: 'uri' }],
}


export const mainReducer = (state = initialState, action) => {



    switch (action.type) {

        case loading:
            return {
                ...state,
                isLoaded: action.payload
            }

        case setPost:
            return {
                ...state,
                posts: action.payload
            }

        case setPhotos:
            return {
                ...state,
                photos: action.payload
            }

        case setUsers:
            return {
                ...state,
                users: action.payload
            }



        default:
            return state;
    }
}
