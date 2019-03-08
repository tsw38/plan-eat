import { jsonToGraphQLQuery } from 'json-to-graphql-query';

const findArguments = (obj, searchTerm) => {

}

export const generateQuery = ({queryName, args, expectations}) => {
    const graphql_query = jsonToGraphQLQuery({
        query: {
            [queryName]: {
                ...(args && {
                    __args: args
                }),
                ...expectations
            }
        }
    }, {
        pretty: false
    });

    return graphql_query;
}

// export const jsonToMutationQLQuery = (type, obj) => {

//     console.warn(type, obj);

//     return {
//         [type]
//     };
// }