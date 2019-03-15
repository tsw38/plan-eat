export const toTitleCase = (str) =>
    str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
);

export const suitify = ({
    parent,
    child,
    variant,
    state
}) => {
    return `${parent}${child ? ` ${parent}-${child}` : ``}${variant ? ` ${parent}--${variant.replace(/\s/g, '-')}` : ``}${state ? ` ${parent}_${state}` : ``}`;
}
