import axios from 'axios';

const STACKVERFLOW_URL = 'https://api.stackexchange.com/2.2/answers?order=desc&sort=activity&site=stackoverflow';
const resolvers = {
  Query: {
    questions: () => axios.get(STACKVERFLOW_URL),
  },
};

export default resolvers;
