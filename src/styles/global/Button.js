
import { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from 'styles/mixins/index';
import { darken, lighten } from 'polished';
import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';

import {polychromes, monochromes} from 'styles/colors';

const colors = {
    ...polychromes,
    ...monochromes
}

export default createGlobalStyle`
    .Button {
        letter-spacing: 0;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: ${sizing.spacingsm};
        font-weight: ${variables.fontBold};
        padding: ${sizing.spacingxs} ${sizing.spacingmd};
        border-radius: ${sizing.spacing3xs};
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        line-height: ${sizing.spacingmd};
        border-width: ${sizing.spacing3xs};
        border-style: solid;
        ${transition()}

        &--Small {
            padding: ${sizing.spacing2xs} ${sizing.spacingxs};
        }

        &--Disabled {
            pointer-events: none;
            user-select: none;
            cursor: not-allowed;

            &.Button--Primary {
                ${colorButtons(lighten(0.20, colors.brand))}
            }

            &.Button--Secondary {
                ${colorButtons(lighten(0.20, colors.brand), true)}
            }

            &.Button--Tertiary {
                ${colorButtons(colors.grey40, true)}

                &--Full {
                    ${colorButtons(colors.grey40)}
                }
            }
            &.Button--Primary--Danger {
                ${colorButtons(lighten(0.20, colors.red))}
            }

            &.Button--Secondary--Danger {
                ${colorButtons(lighten(0.20, colors.red), true)}
            }
        }

        &--Primary {
            ${colorButtons(colors.brand)};

            &:hover {
                ${colorButtons(darken(0.20, colors.brand))}
            }
        }

        &--Secondary {
            ${colorButtons(colors.brand, true)};

            &:hover {
                ${colorButtons(colors.brand)}
            }
        }

        &--Tertiary {
            ${colorButtons(colors.black, true)}

            &:hover {
                ${colorButtons(colors.black)}
            }

            &--Full {
                ${colorButtons(colors.black)}

                &:hover {
                    ${colorButtons(colors.black, true)}
                }
            }

            .Button--Disabled & {}
        }

        &--Primary--Danger {
            ${colorButtons(colors.red)}

            &:hover {
                ${colorButtons(darken(0.2, colors.red, true))}
            }
        }

        &--Secondary--Danger {
            ${colorButtons(colors.red, true)}

            &:hover {
                ${colorButtons(colors.red)}
            }
        }

        &--Ghost {
            .Button--Disabled & {}
        }



        .Icon--Wrapper {
            height: ${sizing.spacinglg};

            .Icon {
                padding: ${sizing.spacing2xs};
                width: ${sizing.spacinglg};

                .Recipe--Serving-Toggle & {
                    padding: ${sizing.spacing3xs};
                }
            }
        }

        ${() => {
            let templateLiteral = '';
            Object.keys(colors).forEach(colorName => {
                const standardColor = colorButtons(colors[colorName]);
                const hoverColor = colorButtons(colors[colorName], true);

                templateLiteral += `
                    &--${colorName} {
                        color: ${standardColor.color};
                        border-color: ${standardColor.borderColor};
                        background-color: ${standardColor.backgroundColor};
                        fill: ${standardColor.fill};

                        &:hover {
                            color: ${hoverColor.color};
                            border-color: ${hoverColor.borderColor};
                            background-color: ${hoverColor.backgroundColor};
                            fill: ${hoverColor.fill};
                        }
                    }
                `;
            });
            return templateLiteral;
        }}
    }

    .Button--Header {
        border-radius: 50%;
        height: ${sizing.spacinglg};
        width: ${sizing.spacinglg};
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    .Button.editable.Tag {
        padding: 0 0 0 ${sizing.spacingmd};
        margin: inherit;
        height: auto;
    }

    .Button.Tag {
        padding: 0 ${sizing.spacingmd};

        &--Caution {
            ${colorButtons(colors.yellow)}
            color: ${colors.black};
            fill: ${colors.black};

            &:hover {
                ${colorButtons(darken(0.2, colors.yellow))}
            }
        }

        &--Hazard {
            ${colorButtons(colors.yellow)}
            &:hover {
                ${colorButtons(darken(0.2, colors.yellow))}
            }
        }

        &--Hazard--Inverted {
            ${colorButtons(colors.yellow, true)}

            &:hover {
                ${colorButtons(colors.yellow)}
            }
        }

        &--Favorite {
            ${colorButtons(colors.pink)}

            &:hover {
                ${colorButtons(darken(0.2, colors.pink))}
            }
        }

        &--Favorite--Inverted {
            ${colorButtons(colors.pink, true)}

            &:hover {
                ${colorButtons(colors.pink)}
            }
        }

        &--Royal {
            ${colorButtons(colors.purple)}

            &:hover {
                ${colorButtons(lighten(0.2, colors.purple))}
            }
        }

        &--Royal--Inverted {
            ${colorButtons(colors.purple, true)}

            &:hover {
                ${colorButtons(colors.purple)}
            }
        }

        &--Go {
            ${colorButtons(colors.green)}

            &:hover {
                ${colorButtons(darken(0.2, colors.green))}
            }
        }

        &--Go--Inverted {
            ${colorButtons(colors.green, true)}

            &:hover {
                ${colorButtons(colors.green)}
            }
        }

        svg {
            height: ${sizing.spacinglg};
            width: ${sizing.spacinglg};
            padding: ${sizing.spacing2xs};
            background-color: white;
            margin-left: ${sizing.spacingmd};

            path {
                transform-origin: 50%;
                transform: rotate(0deg);
                transition: inherit;
            }
        }
    }
`;
