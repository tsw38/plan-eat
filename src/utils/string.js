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
    const variantClass = variant ? (Array.isArray(variant) ? variant.map(str => `${parentClass}--${str}`.replace(/\s/g, '-')) .join(' ') : variant.replace(/\s/g, '-')) : '';

    return `${parentClass && !child ? parentClass : ''}${child ? `${parentClass}-${child}` : ``}${variantClass || ''}${state ? ` ${parentClass}_${state}` : ``}`;
}
