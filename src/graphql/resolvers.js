import { resolvers as demandResolvers } from "./Demand/Demands";

const resolvers = {
    ...demandResolvers,

    Query: {
        ...demandResolvers.Query,
    },

};

export default resolvers;