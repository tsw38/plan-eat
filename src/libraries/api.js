// all the graphql api stuff will go here

export const api = (stuffz) => (dispatch, getState, options) => {
    return new Promise((resolve, reject) => {
        console.warn('awdawdawdawdawdawd')
        setTimeout(() => {
            resolve(200);
        }, 3000);
    })
}