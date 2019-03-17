export const spreadToObject = (arr) => arr.reduce((obj, str) => ({
    ...obj,
    [str]: str
}), {});

export const generateSeed = (seedString = 'anonymous', arr) => {
    const seedGen = require('random-seed-generator');

    return seedGen
        .createWithSeeds(seedString)
        .string({ length: 20, pool: '0123456789' })
        .split('')
        .reduce((finalArr, modulo) => {
            const asNumber = Number(modulo);

            return [
                ...finalArr,
                arr[asNumber === arr.length ? 0 : (asNumber%arr.length)]
            ]
        }, []);
}