export const removeMongoDBIdFromArray = (collectionArray) => {
	return collectionArray
		.map((item) => ({ id: item._id.toString(), ...item }))
		.map(({ _id, ...rest }) => rest);
};

export const removeMongoDBIdFromObject = (obj) => {
	const { _id, ...rest } = { ...obj, id: obj._id.toString() };
	return rest;
};
