import React, { useState } from "react";
import firebase from "../../config/firebase";

import TestUpdate from "./TestUpdate";
import TestAdd from "./TestAdd";
import TestList from "./TestList";

//NOTE -- THIS COLLECTION HAS BEEN DISABLED IN FIREBASE FOR PRODUCTION, USERS WILL HAVE ADD AND GET PERMISSIONS ONLY--NO PUT/DELETE 
function Test() {
  const initialItemState = [{ Fname: "", Lname: "", age: 0 }];
  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(initialItemState);
  const [currentId, setCurrentId] = useState();

  const editItem = (test) => {
    setEditing(true);
    setCurrentItem({
      Fname: test.Fname,
      Lname: test.Lname,
      age: test.age
    });
    setCurrentId(test.id)
  };

  const updateItem = ({ currentItem }, updatedItem) => {
    console.log(
      "It send the item to the updated item function:",
      updatedItem
      
    );
    setEditing(false);
    firebase
      .firestore()
      .collection("test")
      .doc(currentId)
      .update(updatedItem);
  };

  return (
    <div>
      {/* <h2>Item List</h2> */}
      <TestList editItem={editItem} />
      {/* <h2>Add Item</h2> */}
      {editing ? (
        <TestUpdate
          setEditing={setEditing}
          currentItem={currentItem}
          updateItem={updateItem}
        />
      ) : (
        <TestAdd />
      )}
    </div>
  );

}

export default Test;



// function useCollection(collectionName, coll, setColl) {
//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection(collectionName)
//       .onSnapshot(snapshot => {
//         const newColl = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));

//         setColl(newColl);
//       });
//   }, []);

//   return coll;
// }

 // const [tests, setTests] = useState([]);
  // const collection = useCollection("test", tests, setTests);