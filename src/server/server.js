import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import morgan from 'morgan';
import chalk from 'chalk';
import dotenv from 'dotenv';
import compression from 'compression';

import createHtml from 'utils/createHtml';

dotenv.config();

var app = express();

app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({
		extended: true
	}))
	.use(cookieParser())
	.use(compression())
	.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
	.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		next();
	})
	.use('*/favicon', express.static(path.join(process.env.PWD, './src/assets/favicon')))
    .use('*/icons', express.static(path.join(process.env.PWD, './src/assets/icons')))
	.use('*/images', express.static(path.join(process.env.PWD, './src/assets/images')))
	.use('*/css', express.static(path.join(process.env.PWD, './src/assets/styles')))
	.use('*/js', express.static(`./dist/${process.env.VERSION_NUMBER}/client`))
	.use(createHtml);

app.listen(process.env.HTTP_PORT, '0.0.0.0', () => {
	console.log(chalk.magenta(`VERSION NUMBER: ${process.env.VERSION_NUMBER}`))
	console.log(chalk.green(`live on ${process.env.HTTP_PORT} | PID:${process.pid}`));
});