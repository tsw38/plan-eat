/**
 * Standard: For the majority of animations.
 * 		 	 When extra context is needed or when an element is removed from the screen but easily accessible (i.e. slide out navigation panel)
 * Ease-Out: For adding elements to the stage or changing on-screen states at a users' input
 * Ease-In:  For removing elements from the screen or stage.
 */

export default (type, ease) => {
	ease = {
		transitionTimingFunction: (
			ease === 'ease-in' ?
				'cubic-bezier(0.25, 0, 1, 1)' :
			ease === 'ease-out' ?
				'cubic-bezier(0, 0, 0.25, 1)' :
				'cubic-bezier(0.5, 0, 0.1, 1) '
		)
	};


	switch(type) {
		case 'Alert':
		case 'Table':
			return {
				transitionDuration: '300ms',
				...ease
			}
		case 'Panel':
		case 'Modal':
			return {
				transitionDuration: '400ms',
				...ease
			};
		case 'Transition':
			return {
				transitionDuration: '700ms',
				...ease
			}

		case 'Button':
		case 'Small':
		default:
			return {
				transitionDuration: '200ms',
				...ease
			}
	}
}