import styled from 'styled-components';

import {border} from 'styles/variables';
import {lighten} from 'polished';
import {elevate, transition} from 'styles/mixins/index';
import {
    spacingxs,
    spacingsm,
    spacingmd,
    spacing2xs,
    spacing3xl,
    layoutmd,
    layout7_5xl
} from 'styles/sizing';
import { black, brand } from 'styles/colors';


import {HeaderBox} from 'components/header/header.styles';


export const Profile = styled(HeaderBox)`
    grid-area: profile;
    align-items: center;
    justify-content: center;
    display: flex;

    .Icon:last-of-type {
        padding: 0;
    }
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
        flex-direction: column;

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

            &.row {
                display: grid;
                grid-template-columns: auto 1fr;
            }

            &:hover {
                background-color: ${lighten(0.2, brand)};

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

            .Icon--Wrapper {
                padding: 0 ${spacingxs} 0 ${spacingxs};
                svg {
                    padding: 0;
                    height: ${spacingmd};
                    width: auto;
                    margin: 0;
                    ${transition()}
                }
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
    background-color: ${black};

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

