const schema = `
    scalar Date

    type Address {
        line1: String!
        line2: String!
        postcode: String!
        city: String!
        state: String!
        country: String!
    }

    type Customer {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        address: Address!
        createdAt: Date!
    }

    type CustomerAnonymized {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        address: Address!
        createdAt: Date!
    }

    type Query {
        getCustomers: [CustomerAnonymized]
    }
`;

export default schema;