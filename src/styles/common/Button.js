
import styled, { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from '../mixins/index';
import {darken, lighten, parseToHsl, rgbToColorString} from 'polished';

import * as colors from 'styles/colors';

import { spacing3xs, spacingsm, spacing2xs, spacingmd, spacingxs, spacinglg } from 'styles/sizing';

import { fontBold } from 'styles/variables';

export const StyledButton = styled.button`
    &.Button {
        &--${({colorName, inverted}) => inverted ? `${colorName}--Inverted` : colorName}{
            ${({colorName, inverted}) => colorButtons(colors[colorName], inverted)}
            :hover {
                ${({colorName, inverted}) => colorButtons(colors[colorName], !inverted)}
            }
        }
    }
`;

export default createGlobalStyle`
    .Button {
        letter-spacing: 0;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: ${spacingsm};
        font-weight: ${fontBold};
        padding: ${spacingxs} ${spacingmd};
        border-radius: ${spacing3xs};
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        line-height: ${spacingmd};
        border-width: ${spacing3xs};
        border-style: solid;
        ${transition()}


        &--Header {
            position: relative;
        }

        &--Small {
            padding: ${spacing2xs} ${spacingxs};
        }

        &--Disabled {
            pointer-events: none;
            user-select: none;
            cursor: not-allowed;

            &.Button--Primary {
                ${colorButtons(lighten(0.20, colors.blueFrance))}
            }

            &.Button--Secondary {
                ${colorButtons(lighten(0.20, colors.blueFrance), true)}
            }

            &.Button--Tertiary {
                ${colorButtons(colors.stormPetrel, true)}

                &--Full {
                    ${colorButtons(colors.stormPetrel)}
                }
            }
            &.Button--Primary--Danger {
                ${colorButtons(lighten(0.20, colors.amour))}
            }

            &.Button--Secondary--Danger {
                ${colorButtons(lighten(0.20, colors.amour), true)}
            }
        }

        &--Primary {
            ${colorButtons(colors.blueFrance)};

            &:hover {
                ${colorButtons(darken(0.20, colors.blueFrance))}
            }
        }

        &--Secondary {
            ${colorButtons(colors.blueFrance, true)};

            &:hover {
                ${colorButtons(colors.blueFrance)}
            }
        }

        &--Tertiary {
            ${colorButtons(colors.imperialPrimer, true)}

            &:hover {
                ${colorButtons(colors.imperialPrimer)}
            }

            &--Full {
                ${colorButtons(colors.imperialPrimer)}

                &:hover {
                    ${colorButtons(colors.imperialPrimer, true)}
                }
            }

            .Button--Disabled & {}
        }

        &--Primary--Danger {
            ${colorButtons(colors.amour)}

            &:hover {
                ${colorButtons(darken(0.2, colors.amour, true))}
            }
        }


        &--Secondary--Danger {
            ${colorButtons(colors.amour, true)}

            &:hover {
                ${colorButtons(colors.amour)}
            }
        }

        &--Ghost {
            .Button--Disabled & {}
        }

        &.Tag {
            padding: 0 0 0 ${spacingmd};

            &--Caution {
                ${colorButtons(colors.casandora)}
                color: ${colors.imperialPrimer};
                fill: ${colors.imperialPrimer};

                &:hover {
                    ${colorButtons(darken(0.2, colors.casandora))}
                }
            }

            &--Hazard {
                ${colorButtons(colors.casandora)}
                &:hover {
                    ${colorButtons(darken(0.2, colors.casandora))}
                }
            }

            &--Hazard--Inverted {
                ${colorButtons(colors.casandora, true)}

                &:hover {
                    ${colorButtons(colors.casandora)}
                }
            }

            &--Favorite {
                ${colorButtons(colors.lotusPink)}

                &:hover {
                    ${colorButtons(darken(0.2, colors.lotusPink))}
                }
            }

            &--Favorite--Inverted {
                ${colorButtons(colors.lotusPink, true)}

                &:hover {
                    ${colorButtons(colors.lotusPink)}
                }
            }

            &--Royal {
                ${colorButtons(colors.nasaPurple)}

                &:hover {
                    ${colorButtons(lighten(0.2, colors.nasaPurple))}
                }
            }

            &--Royal--Inverted {
                ${colorButtons(colors.nasaPurple, true)}

                &:hover {
                    ${colorButtons(colors.nasaPurple)}
                }
            }

            &--Go {
                ${colorButtons(colors.carribean)}

                &:hover {
                    ${colorButtons(darken(0.2, colors.carribean))}
                }
            }

            &--Go--Inverted {
                ${colorButtons(colors.carribean, true)}

                &:hover {
                    ${colorButtons(colors.carribean)}
                }
            }


            svg {
                height: ${spacinglg};
                width: ${spacinglg};
                padding: ${spacing2xs};
                background-color: white;
                margin-left: ${spacingmd};

                path {
                    transform-origin: 50%;
                    transform: rotate(0deg);
                    transition: inherit;
                }
            }
        }
    }
`;