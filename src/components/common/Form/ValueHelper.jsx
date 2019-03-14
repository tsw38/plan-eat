import React from 'react';

export default ({form, values}) => {
	return Object.keys(values).length > 0 && (
		<pre
			className="Form--Helper">
			{JSON.stringify(values, 0, 4)}
		</pre>
	)
}

// const mapStateToProps = (state) => {
// 	return {
// 		localFormHelper: state.config.settings.localFormHelper
// 	};
// };

// FormHelper.propTypes = {
// 	form: PropTypes.object,
// 	values: PropTypes.object,
// 	localFormHelper: PropTypes.bool
// };

// export default connect(mapStateToProps)(FormHelper);
