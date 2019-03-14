import {spreadToObject} from 'utils/array';

import Alert from 'constants/AlertConstants';
import Modal from 'constants/ModalConstants';
import State from 'constants/StateConstants';
import Recipe from 'constants/RecipeConstants';
import Account from 'constants/AccountConstants';
import Routing from 'constants/RoutingConstants';

export const AlertConstants = spreadToObject(Alert);
export const ModalConstants = spreadToObject(Modal);
export const StateConstants = spreadToObject(State);
export const RecipeConstants = spreadToObject(Recipe);
export const RoutingConstants = spreadToObject(Routing);
export const AccountConstants = spreadToObject(Account);