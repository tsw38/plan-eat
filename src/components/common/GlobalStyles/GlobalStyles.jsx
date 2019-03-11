import React from 'react';

import Global from 'styles/global/global';
import Reset from 'styles/global/reset';
import SVG from 'styles/global/svg';
import Typography from 'styles/global/typography';

import Link from 'styles/global/Link';
import Tabs from 'styles/global/Tabs';
import Modal from 'styles/global/Modal';
import Button from 'styles/global/Button';

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
		</React.Fragment>
    )
}