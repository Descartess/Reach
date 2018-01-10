import axios from 'axios';

const STACKVERFLOW_URL = 'https://api.stackexchange.com/2.2/answers?order=desc&sort=activity&site=stackoverflow';
const LOCALHOST_URL = 'http://localhost:3000/';
const resolvers = {
  Query: {
    questions: () => axios.get(STACKVERFLOW_URL).then(resp => resp.data.items),
    posts: () => axios.get(`${LOCALHOST_URL}posts/`).then(resp => resp.data),
  },
  Mutation: {
    createPost(_, { id, title, author }) {
      return axios.post(`${LOCALHOST_URL}posts/`, { id, title, author }).then(resp => resp.data);
    },
  },
};

export default resolvers;
