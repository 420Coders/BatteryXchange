import axios from "axios";
import Auth from "./auth"

export default {
  getMessage: token => {
    return fetch('/api/message', {
      headers: {
        "authorization": `Bearer ${token}`
      },
    });
  },

  newUser: (User) => {
    return axios.post("/api/newUser", User,{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  }

}