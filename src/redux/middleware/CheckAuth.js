import { LOGIN, PASSWORD } from "../../consts/consts"

export default function CheckAuth(login, password, navigation) {

    return () => {
        if (password === PASSWORD & login === LOGIN) {
            navigation.navigate('Home')
        } else {
            alert('Неправильный логин или пароль')
        }
    }
}