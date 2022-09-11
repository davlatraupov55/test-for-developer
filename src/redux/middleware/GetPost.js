import { setPost } from "../actionType"
import GetUsers from "./GetUsers"


export default function GetPost() {

  return dispatch => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        if (json) {
          dispatch({ type: setPost, payload: json })
          dispatch(GetUsers())

        } else {
          alert('error receiving posts')


        }
      }
      )
  }
}