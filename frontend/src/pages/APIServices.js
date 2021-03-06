import axios from "axios";
import { FaWindows } from "react-icons/fa";
export default class UpdateAccount {
    static handleUpdate(id, formData, setFormData, toastFunc) {
        if (localStorage.getItem('access')) {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                    'Accept': 'application/json'
                }
            };
            const body = JSON.stringify(formData);
            axios.put(`${process.env.REACT_APP_API_URL}/userapi/update_user/${id}/`, body, config)
                .then((response) => {
                    console.log(response)
                    if(response.status == 200){
                    setFormData(body)
                    toastFunc("Details Updated.")
                    window.location.href = '/'
                    }
                })
                .catch((error) => {
                    console.log("error", error)
                    toastFunc(error)
                });
        }
    }
}