const identity = require('../linalgebra/identity.js');
/**
*Creates a dynamic model, following constant position model with respect with the dimensions provided in the observation parameters
* @param {DynamicConfig} dynamic
* @param {ObservationConfig} observation
* @returns {DynamicConfig}
*/

module.exports = function (dynamic, observation) {
	let dimension = dynamic.dimension;
	const observationDimension = observation.dimension;
	const observedProjection = observation.observedProjection;
	const stateProjection = observation.stateProjection;
	let covariance = dynamic.covariance;

	if (!dynamic.dimension) {
		if (observationDimension) {
			dimension = observationDimension;
		} else if (observedProjection) {
			dimension = observedProjection[0].length;
		} else if (stateProjection) {
			dimension = stateProjection[0].length;
		}
	}

	const transition = identity(dimension);
	covariance = covariance || identity(dimension);
	return Object.assign({}, dynamic, {dimension, transition, covariance});
};
