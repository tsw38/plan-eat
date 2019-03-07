export default (color, isInverted = false) => {
    return {
        borderColor: color,
        fill: color,
        ...(isInverted ? {
            color,
            backgroundColor: 'white'
        } : {
            color: 'white',
            backgroundColor: color
        })
    }
}