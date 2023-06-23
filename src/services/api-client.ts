import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3dd4273d5fbf477ba524cb9dcd53d28f",
  },
});
