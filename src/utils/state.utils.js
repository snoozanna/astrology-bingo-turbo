import { FBDocToObj } from "./../utils/firebase.utils";
export const addToLocal = (setter, doc) => {
  setter((collection) => {
    const alreadyThere = collection.find(({ _id }) => doc.id === _id);
    if (alreadyThere) {
      // throw new Error(`Item with id ${doc.id} already exists`);
      console.warn(`Item with id ${doc.id} already exists`);
      return collection;
    }

    console.log(collection);
    const newCollection = [...collection, FBDocToObj(doc)];
    // const newCollection = [...collection, doc];
    console.log(newCollection);
    return newCollection;
  });
};

export const getFromLocalById = (id, collection) => {
  const doc = collection.find(({ _id }) => _id === id);
  if (!doc) {
    throw new Error(`No document found with id ${id}`);
  }
  return doc;
};

export const updateInLocal = (setter, doc) => {
  setter((collection) => {
    const idx = collection.findIndex(({ _id }) => _id === doc.id);
    if (idx === -1) {
      throw new Error(`No document found with id ${doc.id}`);
    }
    return [
      ...collection.slice(0, idx),
      ...doc.data(),
      ...collection.slice(idx + 1),
    ];
  });
};

export const removeFromLocal = (setter, { id }) => {
  setter((collection) => {
    const idx = collection.findIndex(({ _id }) => _id === id);
    if (idx === -1) {
      throw new Error(`No document found with id ${id}`);
    }
    const updatedCollection = [
      ...collection.slice(0, idx),
      ...collection.slice(idx + 1),
    ];
    console.log("updatedCollection", updatedCollection);
    return updatedCollection;
  });
};
