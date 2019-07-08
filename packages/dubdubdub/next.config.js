const { PHASE_PRODUCTION_SERVER } =
	process.env.NODE_ENV === "development"
		? {}
		: !process.env.NOW_REGION
		? require("next/constants")
		: require("next-server/constants");

module.exports = phase => {
	if (phase === PHASE_PRODUCTION_SERVER) {
		return {
			target: "serverless"
		};
	}

	const withTypescript = require("@zeit/next-typescript");

	return withTypescript({
		target: "serverless"
	});
};
