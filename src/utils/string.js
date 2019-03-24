export const toTitleCase = (str) =>
    str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
);

export const suitify = ({
    variant,
    parent,
    child,
    state
}) => {
    const parentClass = parent.split(' ').join('-');
    const variantClass = variant ? (
        Array.isArray(variant) ? variant
            .filter(Boolean)
            .map(str => `${parentClass}--${str}`)
            .join(' ') : `${parentClass}--${variant.replace(/\s/g, '-')}`) : '';

    return `${parentClass && !child ? parentClass : ''}${child ? `${parentClass}-${child}` : ``}${variantClass ? ` ${variantClass}` : ''}${state ? ` ${parentClass}_${state}` : ``}`;
}
