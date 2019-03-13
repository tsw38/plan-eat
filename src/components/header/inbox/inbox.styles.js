import styled from 'styled-components';

import * as styles from 'styles/sizing';

import {HeaderBox} from 'components/header/header.styles';

export const Inbox = styled(HeaderBox)`
	grid-area: inbox;
    max-height: ${styles.spacing3xl}
`;