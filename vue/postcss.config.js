const AUTOPREFIXER_BROWSERS = [
	'ios >= 4',
	'android >= 2.1',
	'ie_mob >= 10',
	'ie >= 9',
	'Firefox >= 20'
];
module.exports = {
	plugins: {
		autoprefixer: AUTOPREFIXER_BROWSERS
	}
}