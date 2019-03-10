import convert from 'convert-units';

// units come in scaled down by 100, convert it back up
export const convertUnit = (quantity, isMass, isMetric) => {
    if (isMass) {
        const {val, unit} = convert(quantity).from(isMetric ? 'g' : 'oz').toBest();
        return {
            quantity: Math.floor(val),
            unit
        };
    }
    const { val, origin } = convert(quantity).from(isMetric ? 'ml' : 'fl-oz');

    return {
        quantity: Math.floor(val),
        unit: origin.abbr
    }
}