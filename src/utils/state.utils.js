export const getUpdatedLocal = (collection, id, updatedDoc) => {
  const idx = collection.findIndex(({ _id }) => _id === id);
  return [
    ...collection.slice(0, idx),
    updatedDoc,
    ...collection.slice(idx + 1),
  ];
};

export const getUpdatedLocalFromDelete = (collection, id) => {
  const idx = collection.findIndex(({ _id }) => _id === id);
  if (idx === -1) {
    throw new Error(`No document found with id ${id}`);
  }
  return [...collection.slice(0, idx), ...collection.slice(idx + 1)];
};