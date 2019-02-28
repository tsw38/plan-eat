export default (req,res,next) => {
	let html = `<!DOCTYPE html>
	<html>
		<head>
		</head>
		<body>
			<div id="plan-eat"></div>
			<script src="./js/bundle.js"></script>
		</body>
	</html>`;

	res.send(html.replace(/\s{2,}/g, ''));
}