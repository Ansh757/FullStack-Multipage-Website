// import {createContext, useState, useContext} from "react";
//
// const APIContextUser = createContext();
//
// const initial = {
//     username: "",
//     password: "",
//     last_name: "",
//     first_name: "",
//     email: "",
//     avatar: "",
//     phone_number: ""
// }
//
//
// function APIContextUserProvider(props) {
//
//     const [data, setData] = useState(initial);
//
//     function updateUserInfo(username, password,
//                             phone_number, email,
//                             avatar, first_name, last_name) {
//         setData({
//             username, password,
//             phone_number, avatar, first_name,
//             last_name, email})
//     }
//
//     return <APIContextUser.Provider value={[data, updateUserInfo]} {...props}/>
//
// }
//
// function useUserInfo() {
//     const context = useContext(APIContextUser)
//     if (!context) throw Error('Not inside the box');
//     return context;
// }
// export default  APIContextUser;
// export { APIContextUserProvider, useUserInfo};
//

import {createContext, useState, useContext} from "react";

const initial = {
    username: "",
    password: "",
    last_name: "",
    first_name: "",
    email: "",
    avatar: "",
    phone_number: "",
    repeat_password: ""
}
// const initial = {a: "a"}

export const useUserAPIContext = () => {
    const [data, setData] = useState(initial);
    const [dummy, setDummy] = useState("")
    return {
        data,
        setData,
        dummy, setDummy
    }
}

const APIContextUser = createContext({
    data: initial, setData: () => {},
    dummy: "", setDummy: () => {},

})

export default APIContextUser;