import { jsonToGraphQLQuery } from 'json-to-graphql-query';
import axios from 'axios';
console.log('this is the process', process.env.API_URL);
// all the graphql api stuff will go here

export const api = (dispatch, getState, options) => {
    console.warn(dispatch, getState, options);

    // return axios({
    //     method: 'post',
    //     url: process.env.API_URL,
    //     data: query
    // }).then(resp => {
    //     console.warn('this is the options', options);
    //     console.warn('this is the resp', resp);
    //     return resp;
    // }).finally(resp => {
    //     console.warn('this most likely broke', resp);
    // })
    return new Promise((resolve, reject) => {
        console.warn('awdawdawdawdawdawd')
        setTimeout(() => {
            resolve(200);
        }, 3000);
    })
}