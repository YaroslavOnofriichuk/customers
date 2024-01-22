import CustomerAnonymized from "../models/customer-anonymized";

const resolver = {
    Query: {
      getCustomers: () => CustomerAnonymized.find(),
    },
};

export default resolver;