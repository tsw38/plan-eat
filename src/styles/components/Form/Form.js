import styled from 'styled-components';

import {elevate} from 'styles/mixins/index';
import {stormPetrel, amour, blueFrance, blackSqueeze} from 'styles/colors';
import {
    layoutxs,
    layoutsm,
    spacing2lg,
    spacingsm,
    spacinglg,
    _14px,
    spacing3xs,
    spacingmd,
    spacing2xl,
    spacingxs
} from 'styles/sizing';
import {border} from 'styles/variables';
import {lighten} from 'polished';

import { fontBold, fontLight } from 'styles/variables';

export const FormWrapper = styled.div`
    &.Form {
        form {
            border: 1px solid ${stormPetrel};
        }

        &--Modal {
            width: 30vw;

            form {
                border:none;
                padding: 0;
            }
        }
    }

    .Form--Title {
        margin-bottom: ${layoutsm};
        font-size: ${spacing2lg};
        font-weight: ${fontLight};
    }

    form {
        background-color: white;

        padding: ${spacinglg};
        ${elevate('Raised')}

        label {
            > span {
                font-size: ${_14px};
                font-weight:${fontBold};
                display: block;
                margin-bottom: ${spacingxs};
            }
        }

        .Input {
            margin-bottom: ${layoutxs};

            input {
                font-size: ${_14px};
                display: block;
                width: 100%;
                height: ${spacing2xl};
                padding: 0 ${spacingmd};
                color: ${blueFrance};
                background-color: ${blackSqueeze};
                box-shadow: 0 1px 0 0 ${stormPetrel};
                border: none;
                border-bottom: 1px solid transparent;

                :focus {
                    outline: none;
                    box-shadow: 0 ${spacing3xs} 0 0 ${blueFrance};
                }
            }
        }

        .Alert {
            margin-top: ${spacingxs};
            font-size: ${spacingsm};
        }
    }
`;

