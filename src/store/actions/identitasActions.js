export const addIdentitas = (identitas) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirebase().firestore();
    // const identitasId = getState().firebase.auth.uid;
    firestore
      .collection("identitas")
      .add({
        ...identitas,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: "ADD_IDENTITAS",
          identitas,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_IDENTITAS_ERR",
          err,
        });
      });
  };
};

export const removeIdentitas = (identitas) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("identitas")
      .doc(identitas.id)
      .delete()
      .then(() => {
        dispatch({
          type: "REMOVE_IDENTITAS",
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVE_IDENTITAS_ERR",
          err,
        });
      });
  };
};
