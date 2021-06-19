import { firestore as db } from "./../firebase";

const FBDocToObj = (doc) => ({ ...doc.data(), _id: doc.id });

// CRUD
// Create
const addOne = async (data, collectionName) => {
  /* If we had typescript we could avoid this. It's verbose but there to help in the future */
  if (!data || !Object.isObject(data)) {
    throw new Error(
      `No data provided to firebase addOne. Instead received ${data}`
    );
  }
  if (!collectionName || typeof collectionName !== "string") {
    throw new Error(
      `No collectionName provided to firebase addOne. Instead received ${collectionName}`
    );
  }

  try {
    return db.collection(collectionName).add(data);
  } catch (err) {
    console.log("Error for addOne: ", err);
    return Promise.reject(err.message);
  }
};

const addMany = async (data = [], collectionName) => {
  if (!collectionName || typeof collectionName !== "string") {
    throw new Error(
      `No collection name provided to firebase addMany. Instead received ${collectionName}`
    );
  }
  if (!Array.isArray(data)) {
    throw new Error(
      `Improper data provided to firebase addMany. Received ${JSON.stringify(
        data
      )}`
    );
  }

  try {
    const batch = db.batch();
    for (const item of data) {
      const docRef = db.collection(collectionName).doc();
      batch.set(docRef, item);
    }
    return batch.commit();
  } catch (err) {
    console.log("Error for addOne: ", err);
    return Promise.reject(err.message);
  }
};

// Read
const getOne = async (id, collectionName) => {
  if (!id) {
    throw new Error(
      `No collection name provided to firebase getOne. Instead received ${id}`
    );
  }
  if (!collectionName) {
    throw new Error(
      `No collection name provided to firebase getOne. Instead received ${collectionName}`
    );
  }
  try {
    return db.collection(collectionName).get(id);
  } catch (err) {
    console.log("Error for getOne: ", err);
    return Promise.reject(err.message);
  }
};

const getMany = async (ids = [], collectionName) => {
  try {
    const promises = [];
    for (const id of ids) {
      promises.push(getOne(id, collectionName));
    }
    return Promise.all(promises);
  } catch (err) {
    return Promise.reject(err.message);
  }
};

const getCollection = async (collectionName) => {
  try {
    const snapshot = await db.collection(collectionName).get();
    const calls = snapshot.docs.map((doc) => {
      // console.log("new id", doc.id);
      return FBDocToObj(doc);
    });
    return calls;
    // return snapshot.docs;
  } catch (err) {
    return Promise.reject(err.message);
  }
};

// Update
const updateOne = async (id, updates, collectionName) => {
  if (!id || typeof id !== "string") {
    throw new Error(`Improper id passed to updateOne: received ${id}`);
  }
  if (!updates || !Object.isObject(updates)) {
    throw new Error(
      `Improper updates name passed to updateOne: received ${JSON.stringify(
        updates
      )}`
    );
  }
  if (!collectionName || typeof updates !== "string") {
    throw new Error(
      `Improper collection name passed to updateOne: received ${collectionName}`
    );
  }
  try {
    delete updates._id;
    return db.collection(collectionName).doc(id).update(updates);
  } catch (err) {
    return Promise.reject(err.message);
  }
};

// 'updates' must contain the id
const updateMany = async (updates = [], collectionName) => {
  try {
    const batch = db.batch();
    for (const update of updates) {
      const docRef = db.collection(collectionName).doc(update._id);
      const { _id, ...change } = update;
      batch.update(docRef, change);
    }
    return batch.commit();
  } catch (err) {
    return Promise.reject(err.message);
  }
};

// Delete
const deleteOne = async (id, collectionName) => {
  try {
    return db.collection(collectionName).doc(id).delete();
  } catch (err) {
    return Promise.reject(err.message);
  }
};

const deleteMany = async (ids = [], collectionName) => {
  if (!collectionName) {
    throw new Error(
      `No collection name passed to deleteMany: received ${collectionName}`
    );
  }

  if (!Array.isArray(ids)) {
    throw new Error(
      `deleteMany requires an array of string ids: received ${JSON.stringify(
        ids
      )}`
    );
  }

  try {
    const batch = db.batch();
    for (const id of ids) {
      batch.delete(db.collection(collectionName).doc(id));
    }
    return batch.commit();
  } catch (err) {
    return Promise.reject(err.message);
  }
};

const clearCollection = async (localCollection, collectionName) => {
  if (!Array.isArray(localCollection)) {
    throw new Error(
      `Improper localCollection name passed to clearCollection: received ${JSON.stringify(
        localCollection
      )}`
    );
  }
  if (!collectionName) {
    throw new Error(
      `No collection name passed to clearCollection: received ${collectionName}`
    );
  }
  try {
    const ids = localCollection.map(({ _id }) => _id);
    return deleteMany(ids, collectionName);
  } catch (err) {
    const reason = `Error loading calls to firestore: ${err.message}`;
    console.log(reason);
    return Promise.reject(reason);
  }
};

const bindListeners = async (
  collection_name,
  { add, remove, update } = {
    add: () => {},
    update: () => {},
    remove: () => {},
  }
) => {
  return (
    db
      .collection(collection_name)
      // .get()
      .onSnapshot((snapshot) => {
        // console.log("snapshot", snapshot);
        let changes = snapshot.docChanges();
        for (const change of changes) {
          switch (change.type) {
            case "added":
              console.log("added", change.doc.id, change.doc.data());
              add(change.doc);
              break;
            case "modified":
              console.log("modified", change.doc.id, change.doc.data());
              update(change.doc);
              break;
            case "removed":
              console.log("removed", change.doc.id, change.doc.data());
              remove(change.doc);
              break;
            default:
              return;
          }
        }
      })
  );
};

const swap = async (localDoc, origin, destination) => {
  try {
    const batch = db.batch();
    const { _id: docId } = localDoc;

    const ref = db.collection(origin).doc(docId);
    batch.delete(ref);

    const destinationDocRef = db.collection(destination).doc();
    batch.set(destinationDocRef, localDoc);

    return batch.commit();
  } catch (err) {
    return Promise.reject(err.message);
  }
};

export {
  addOne,
  addMany,
  getOne,
  getMany,
  getCollection,
  updateOne,
  updateMany,
  deleteOne,
  deleteMany,
  clearCollection,
  bindListeners,
  swap,
  FBDocToObj,
};
