import React from "react";

class Button extends React.Component {
	render() {
		const {
			children
		} = this.props;

		return (
			<button>
				{children}
			</button>
		)
	}
}

export default Button;
