const modelCollection = require('./lib/model-collection');

module.exports = {
	registerDynamic: modelCollection.registerDynamic,
	KalmanFilter: require('./lib/kalman-filter'),
	registerObservation: modelCollection.registerObservation,
	buildObservation: modelCollection.buildObservation,
	buildDynamic: modelCollection.buildDynamic,
	getCovariance: require('./lib/utils/get-covariance'),
	State: require('./lib/state')
};
