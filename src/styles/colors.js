import {hsl} from 'polished';

// export const red   	 = hsl(0, 90, 65);
// export const orange   = hsl(20, 90, 65);
// export const yellow   = hsl(45, 90, 65);
// export const green    = hsl(150, 90, 65);
// export const babyBlue = hsl(190, 90, 65);
// export const blue     = hsl(220, 90, 65);
// export const purple   = hsl(265, 90, 65);
// export const pink     = hsl(320, 90, 65);

export const red   	  = hsl(0, 0.90, 0.65);
export const danger   = red;
export const reject   = red;
export const error    = red;
export const orange   = hsl(20, 0.90, 0.65);
export const warning  = orange;
export const yellow   = hsl(45, 0.90, 0.65);
export const caution  = yellow;
export const green    = hsl(150, 0.90, 0.65);
export const success  = green;
export const babyBlue = hsl(190, 0.90, 0.65);
export const blue     = hsl(220, 0.90, 0.65);
export const brand    = blue;
export const purple   = hsl(265, 0.90, 0.65);
export const pink     = hsl(320, 0.90, 0.65);
export const favorite = pink;
export const love     = pink;

export const white    = hsl(216, 0.15, 0.97);
export const grey20   = hsl(216, 0.15, 0.80);
export const grey40   = hsl(216, 0.15, 0.60);
export const grey60   = hsl(216, 0.15, 0.40);
export const black    = hsl(216, 0.30, 0.15);

export const polychromes = {
    red,
    orange,
    yellow,
    green,
    babyBlue,
    brand,
    purple,
    pink
}

export const monochromes = {
    white,
    grey20,
    grey40,
    grey60,
    black,
}

export const brandColors = {
    danger,
    reject,
    error,
    warning,
    caution,
    success,
    brand,
    favorite,
    love
}

// export default {
//     ...monochromes,
//     ...polychromes
// }