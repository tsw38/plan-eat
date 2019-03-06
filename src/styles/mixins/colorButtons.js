import {white} from 'styles/colors';

export default (color, isInverted = false) => {
    return {
        borderColor: color,
        fill: color,
        ...(isInverted ? {
            color,
            backgroundColor: white
        } : {
            color: white,
            backgroundColor: color
        })
    }

    // .Icon { fill: ${blueFrance}; }

    // &:hover {
    //     background-color: ${darken(0.2, blueFrance)};
    //     border-color: ${darken(0.2, blueFrance)};
    // }
}