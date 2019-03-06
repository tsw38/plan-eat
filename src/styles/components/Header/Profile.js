import styled from 'styled-components';
import {border} from 'styles/variables';
import {elevate, transition} from '../../mixins/index';

import {HeaderBox} from 'styles/components/Header/Header';
import {
    spacingxs,
    spacingsm,
    spacingmd,
    spacing2xs,
    spacing3xl,
    layoutmd,
    layout6xl
} from 'styles/sizing';
import { outerSpace, submarine, white } from '../../colors';


export const Profile = styled(HeaderBox)`
    grid-area: profile;
`;

export const AccountDropDown = styled.div`
    overflow: hidden;
    position: absolute;
    top: ${spacing3xl};
    right:0;
    pointer-events: none;

    max-height:0;
    max-width: ${layout6xl};

    background-color: white;
    ${transition('Panel', 'ease-in')}

    ${Profile}:hover &, &:hover {
        max-height:500px;
        pointer-events: all;
        ${transition('Panel', 'ease-out')}
    }

    .Menu {
        padding: ${spacingsm};

        &.row {
            text-align: left;
        }

        &--User {
            border-bottom: ${border};

            figure {
                display: flex;
            }
        }

        &--Settings {
            border-bottom: ${border};

            a {
                display: inline-block;
                font-size: ${spacingsm};
                padding: ${spacingxs};
            }
        }

        &--Signout {
            display: flex;
            align-items: center;
            max-height: ${layoutmd};
            text-align: left;

            &:hover {
                background-color: ${submarine};

                svg {
                    fill: ${white};
                }

                .Link {
                    color: ${white};
                }
            }

            svg {
                padding: 0 ${spacingsm} 0 ${spacingxs};
                height: ${spacingmd};
                width: auto;
                ${transition()}
            }

            .Link {
                margin-top: -${spacing2xs};
                ${transition()}
            }
        }
    }
`;

export const Image = styled.div`
    width: inherit;
    max-width: ${layoutmd};
    max-height: ${layoutmd};
    overflow: hidden;

    background-color: ${outerSpace};

    border-radius: 50%;
    margin-right: ${spacingxs};

    &:hover {
        img {
            opacity: 0.75;
        }
    }

    img {
        max-width: 100%;
        opacity: 1;
        ${transition()}
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
`;

