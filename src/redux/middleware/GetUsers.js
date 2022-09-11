import { setUsers, loading } from "../actionType"


export default function GetUsers() {

  return dispatch => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        if (json) {
          dispatch({ type: setUsers, payload: json })
          dispatch({ type: loading, payload: true })

        } else {
          dispatch({ type: loading, payload: true })
          alert('error receiving users')


        }
      }
      )
  }
}