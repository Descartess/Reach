const Schema = [
  `
    type StackoverFlowQuestion {
        id: Int!
    }

    type Query {
        questions: [StackoverFlowQuestion]
    } 
    schema {
        query: Query
    }
    `,
];

export default Schema;
