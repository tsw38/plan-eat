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
    const parentClass = parent.split(' ').join('--');

    return `${parentClass}${child ? ` ${parentClass}-${child}` : ``}${variant ? ` ${parentClass}--${variant.replace(/\s/g, '-')}` : ``}${state ? ` ${parent}_${state}` : ``}`;
}
