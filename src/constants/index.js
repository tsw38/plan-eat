import {spreadToObject} from 'utils/array';

import Alert from 'constants/AlertConstants';
import Account from 'constants/AccountConstants';
import Routing from 'constants/RoutingConstants';

export const AlertConstants = spreadToObject(Alert);
export const RoutingConstants = spreadToObject(Routing);
export const AccountConstants = spreadToObject(Account);