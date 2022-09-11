import { setPhotos, loading } from "../actionType";
import GetPost from "./GetPost";


export default function GetPhotos() {

  return dispatch => {
    dispatch({ type: loading, payload: false })
    fetch('https://jsonplaceholder.typicode.com/photos', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json) {
          dispatch({ type: setPhotos, payload: json })
          dispatch(GetPost())
        } else {
          alert('error receiving users')


        }
      }
      )
  }
}