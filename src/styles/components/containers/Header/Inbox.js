import styled from 'styled-components';

import {HeaderBox} from 'styles/components/containers/Header/Header';

import * as styles from 'styles/sizing';
export const Inbox = styled(HeaderBox)`
	grid-area: inbox;
    max-height: ${styles.spacing3xl}
`;