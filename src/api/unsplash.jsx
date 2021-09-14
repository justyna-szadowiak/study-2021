import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID fjjPsUaIyuk8rBienG9u3VcDd_6mbATR4TGruOakINA",
  },
});
