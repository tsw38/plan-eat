// all the graphql api stuff will go here

export const api = (dispatch, getState, options) => {
    return (payload) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(200);
            }, 3000);
        })
    }
}