import React, { useState, useEffect } from "react";
import firebase from "../Firebase/firebase";
import { query, collection, onSnapshot } from "firebase/firestore";
import Grid from "@mui/material/Unstable_Grid2";
import "./ListDreams.css";
import Displaydreams from "../DisplayDreams/Displaydreams";

export default function ListDreams() {
  const [dreams, setDreams] = useState([]);

  const db = firebase.firestore();

  useEffect(() => {
    const fetchDreams = async () => {
      const dreamsRef = query(collection(db, "Dreams"));
      const DreamsSnapshot = onSnapshot(dreamsRef, (querySnapshot) => {
        let dreamsArr = [];
        querySnapshot.forEach((doc) => {
          dreamsArr.push({ ...doc.data(), id: doc.id });
        });
        setDreams(dreamsArr);
      });
      return () => DreamsSnapshot();
    };
    fetchDreams();
  }, []);

  function formatDate(timestamp) {
    const date = new Date(
      timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
    );
    return Intl.DateTimeFormat("fr-FR").format(date);
  }

  function formatBoolean(value) {
    return value ? "Oui" : "Non";
  }

  return (
    <Grid>
      <div className="dreams-list">
        <h1 className="title">Somni Ephemeris</h1>
        <h2>Voici la jolie liste des rêves :</h2>

        <Grid container spacing={3} justify="center">
          {dreams.map((dream) => (
            <Grid key={dream.id}>
              <Displaydreams
                title={dream.title}
                date={formatDate(dream.date)}
                description={dream.description}
                feeling={dream.feeling}
                lucidity={dream.lucidity}
                is_nightmare={formatBoolean(dream.is_nightmare)}
                is_recurrent={formatBoolean(dream.is_recurrent)}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
  );
}
