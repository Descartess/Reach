const Schema = [
  `
    type StackoverFlowQuestion {
        answer_id: Int
    }

    type Post {
        id: Int,
        title: String,
        author: String
    }

    type Query {
        questions: [StackoverFlowQuestion],
        posts: [Post]
    } 

    type Mutation {
        createPost(
            id: Int!, title: String!, author: String!
        ): Post
    }

    schema {
        query: Query,
        mutation: Mutation,
    }
    `,
];

export default Schema;
