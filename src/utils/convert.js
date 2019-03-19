import convert from 'convert-units';
import {roundToTwo} from 'utils/math';
// units come in scaled down by 100, convert it back up
export const convertUnit = (quantity, isMass, isMetric) => {
    if (isMass) {
        const {val, unit} = convert(quantity).from(isMetric ? 'g' : 'oz').toBest();
        return {
            quantity: roundToTwo(val),
            unit
        };
    }
    const {unit, val} = convert(quantity).from(isMetric ? 'ml' : 'fl-oz').toBest({
        exclude: [
            'm', 'tsk', 'cm3', 'msk', 'cl', 'dl', 'kkp',
            'glas'
        ]
    }
    );

    return {
        quantity: roundToTwo(val),
        unit: unit
    }
}