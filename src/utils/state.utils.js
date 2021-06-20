import { FBDocToObj } from "./../utils/firebase.utils";

export const addToLocal = (setter, doc) => {
  setter((collection) => {
    const idx = collection.findIndex(({ _id }) => doc.id === _id);
    let newCollection = null;
    if (idx > -1) {
      console.warn(`duplicate id in addToLocal: ${doc.id}`);
    } else {
      const formattedItem = FBDocToObj(doc);
      newCollection = [...collection, formattedItem];
      console.log(`adding ${formattedItem._id} to local`);
    }
    return newCollection;
  });
};

export const bulkAddToLocal = (setter, items=[]) => {
    setter((collection) => [...collection, ...items]);
}

export const getFromLocalById = (id, collection) => {
  const doc = collection.find(({ _id }) => _id === id);
  if (!doc) {
    throw new Error(`No document found with id ${id}`);
  }
  return doc;
};

export const updateInLocal = (setter, doc) => {
  console.log(`updating ${doc.id} in local`);
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
  console.log(`removing ${id} from local`);
  setter((collection) => {
    const idx = collection.findIndex(({ _id }) => _id === id);
    if (idx === -1) {
      throw new Error(`No document found with id ${id}`);
    }
    const updatedCollection = [
      ...collection.slice(0, idx),
      ...collection.slice(idx + 1),
    ];
    // console.log("removeFromLocal updatedCollection", updatedCollection);
    return updatedCollection;
  });
};
