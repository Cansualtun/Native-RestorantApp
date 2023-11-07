import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer N3R4p9MYsaCB-xfXDUXVBHnaoXHjoADEyk8m69oS8NN21uv0JIWsGIz6_mZplUs56H6Aw6DdiRb6nOSQa3mm2tvpW9TlUyyZ2QsuXnGm3JOKJ6cjm9VTSRPPc-ZJZXYx",
  },
});
