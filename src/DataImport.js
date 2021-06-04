import React, { useContext, useState, useEffect } from "react";
import { firestore as db } from "./../firebase";
import { useToasts } from "react-toast-notifications";
import { PlayersContext } from "./../contexts/players.context";
// MOVE CELEBS TO PLAYERS
// on admin page, a button which says load celebs
// loops over the documents in collection celebs
// addPlayer for each of them (they are copied from celebs to players)
//set it up so can import different spreadsheets

const dataCollectionName = "celebs";

export const DataImport = () => {
  const { addToast } = useToasts();
  const { addPlayer } = useContext(PlayersContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get initial data
    const getData = async () => {
      try {
        const snapshot = await db.collection(dataCollectionName).get();
        console.log("snapshot", snapshot);
        const newData = snapshot.docs.map((doc) => {
          console.log("new id", doc.id);
          return { _id: doc.id, ...doc.data() };
        });

        setData(newData);
      } catch (err) {
        console.log(err);
        addToast(err.message, {
          appearance: "error",
        });
      }
    };

    // if(!players.length){
    getData();
    // }

    // Watch the collection
    db.collection(dataCollectionName).onSnapshot((snapshot) => {
      console.log("snapshot", snapshot);
      let changes = snapshot.docChanges();
      for (const change of changes) {
        switch (change.type) {
          case "added":
            console.log("added", change);
            getData();
            break;
          case "removed":
            console.log("removed", change, change.doc.id);
            getData();
            break;
          default:
            return;
        }
      }
    });
  }, []);

  return;
};
