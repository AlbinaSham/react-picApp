import axios from "axios";
export default axios.create ({
    baseURL:  "https://api.unsplash.com" ,
    headers: {
        Authorization: " Client-ID yo7viJDkXLIQ7D2LQxWYw00ES2wxUQcHaSwno2bS0SM "
      }
    });