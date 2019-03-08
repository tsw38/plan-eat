// import { jsonToGraphQLQuery } from 'json-to-graphql-query';
import axios from 'axios';
import { generateQuery } from 'utils/graphQL';
import chalk from 'chalk';

export const api = (dispatch) => ({query, mutationName, variables}) => {
    // const query = queryName && generateQuery({queryName, args, expectations});
    // const mutation = mutationName && generateMutation({queryName, args, expectations});

    // return axios({
    //     method: 'POST',
    //     url: process.env.API_URL,
    //     data: {
    //         query
    //     }
    // }).then(resp => {
    //     console.warn('this is the options', resp);
    //     console.warn('this is the resp', resp);
    //     return resp;
    // }).catch(resp => {
    //     console.warn('this is an error', resp);
    // }).finally(resp => {
    //     console.warn('this most likely broke', resp);
    // })
    // return new Promise((resolve, reject) => {
    //     // console.warn('awdawdawdawdawdawd')
    //     setTimeout(() => {
    //         resolve(200);
    //     }, 3000);
    // })

    return axios({
        url: process.env.API_URL,
        method: 'post',
        data: {
            query,
            variables
        }
    }).then(resp => {
        console.log(chalk.green('this is the options'), resp);
        console.log(chalk.green('this is the resp'), resp);
        return resp;
    }).catch(resp => {
        console.log(chalk.red('this is an error'), resp);
    }).finally(resp => {
        console.log(chalk.blue('this most likely broke'), resp);
    })
}