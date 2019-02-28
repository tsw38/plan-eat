
export default (layerName) => {
	switch(layerName) {
		case 'Flat':
			return {
				zIndex: 1,
				boxShadow: 'none'
			}
		case 'Raised':
			return {
				zIndex: 2,
				boxShadow: '0 1px 2px 0 rgba(0,0,0,0.10)'
			}
		case 'Overlay':
			return {
				zIndex: 8,
				boxShadow: '0 4px 8px 0 rgba(0,0,0,0.10)'
			};
		case 'StickyNav':
			return {
				zIndex: 12,
				boxShadow: '0 6px 12px 0 rgba(0,0,0,0.10)'
			}
		case 'TemporaryNav':
			return {
				zIndex: 16,
				boxShadow: '0 8px 16px 0 rgba(0,0,0,0.10)'
			}
		case 'PopOut':
			return {
				zIndex: 24,
				boxShadow: '0 12px 24px 0 rgba(0,0,0,0.10)'
			}
		case 'Base':
		default:
			return {
				zIndex: 0,
				boxShadow: 'none'
			}
	}
}