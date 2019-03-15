export default (color, isInverted = false) => {
    return {
        borderColor: color,
        fill: color,
        ...(isInverted ? {
            color,
            backgroundColor: 'transparent'
        } : {
            color: 'white',
            backgroundColor: color
        })
    }
}