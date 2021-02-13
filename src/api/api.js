import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://swapi.dev/api/people/",
});

export const peopleApi = {
  getCharacters(currentPage) {
    return instance
      .get(`?page=${currentPage}`)
      .then((response) => {
        return response.data;
      });
  },
};

