import React from 'react';

import Global from 'styles/global/global';
import Reset from 'styles/global/reset';
import SVG from 'styles/global/svg';
import Typography from 'styles/global/typography';

import Tag from 'styles/global/tag';
import Link from 'styles/global/link';
import Tabs from 'styles/global/tabs';
import Form from 'styles/global/form';
import Input from 'styles/global/input';
import Modal from 'styles/global/modal';
import Alert from 'styles/global/alert';
import Carbon from 'styles/global/carbon';
import Button from 'styles/global/button';
import Loading from 'styles/global/loading';
import Notification from 'styles/global/notification';

export default () => {
	return (
        <React.Fragment>
            <Reset />
            <Global />
            <Typography />
            <SVG />
            <Link />
            <Modal />
            <Button />
            <Tabs />
            <Tag />
            <Alert />
            <Loading />
            <Input />
            <Form />
            <Carbon />
            <Notification />
		</React.Fragment>
    )
}