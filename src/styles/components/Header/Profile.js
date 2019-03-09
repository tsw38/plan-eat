import styled from 'styled-components';
import {border} from 'styles/variables';
import {elevate, transition} from 'styles/mixins/index';

import {lighten} from 'polished';

import {HeaderBox} from 'styles/components/Header/Header';
import {
    spacingxs,
    spacingsm,
    spacingmd,
    spacing2xs,
    spacing3xl,
    layoutmd,
    layout7_5xl
} from 'styles/sizing';
import { imperialPrimer, blueFrance } from 'styles/colors';


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
    min-width: ${layout7_5xl};

    background-color: white;
    ${transition('Panel', 'ease-in')}
    ${elevate('StickyNav')}

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
                margin: 0;
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
            ${transition()}

            &:hover {
                background-color: ${lighten(0.2, blueFrance)};

                svg {
                    fill: white;
                }

                .Link {
                    color: white;
                }
            }

            > div {
                margin: 0;
            }

            svg {
                padding: 0 ${spacingxs} 0 ${spacingxs};
                height: ${spacingmd};
                width: auto;
                margin: 0;
                ${transition()}
            }

            .Link {
                margin:0;
                margin-top: -${spacing2xs};
                ${transition()}
            }
        }
    }
`;

export const Image = styled.div`
    width: ${layoutmd};
    height: ${layoutmd};
    max-width: ${layoutmd};
    max-height: ${layoutmd};
    overflow: hidden;
    flex-shrink: 0;
    background-color: ${imperialPrimer};

    border-radius: 50%;
    margin-right: ${spacingmd};

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

