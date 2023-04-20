import React, { useState } from "react";
import firebase from "../Firebase/firebase";
import "./AddDreams.css";

export default function AddDreams() {
  const db = firebase.firestore();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [lucidityLevel, setLucidityLevel] = useState("");
  const [isNightmare, setIsNightmare] = useState("");
  const [isRecurrent, setIsRecurrent] = useState("");
  const [feeling, setFeeling] = useState("");

  const dream = {
    title: title,
    date: firebase.firestore.Timestamp.fromDate(new Date(date)),
    description: description,
    lucidityLevel: lucidityLevel,
    isNightmare: isNightmare,
    isRecurrent: isRecurrent,
    feeling: feeling,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // faire quelque chose avec les données du formulaire
    db.collection("Dreams")
      .add(dream)
      .then(() => {
        console.log("Nouveau rêve ajouté avec succès !");
        alert("Nouveau rêve ajoutérêve ajouté avec succès !");
        setTitle("");
        setDate("");
        setDescription("");
        setLucidityLevel("");
        setIsNightmare("");
        setIsRecurrent("");
        setFeeling("");
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du rêve :", error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h2> Ajout d'un rêve</h2>
        <h3 className="title-add_dream">Veuillez décrire votre dernier rêve</h3>
        <hr/>
        <div className="form-group">
          <label className="label">Titre du rêve :</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Date :</label>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Description :</label>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="textarea"
          />
        </div>
        <div className="form-group">
          <label className="label">Cauchemar :</label>
          <input
            type="checkbox"
            checked={isNightmare}
            onChange={(event) => setIsNightmare(event.target.checked)}
            className="checkbox"
          />
        </div>
        <div className="form-group">
          <label className="label">Récurrence :</label>
          <input
            type="checkbox"
            checked={isRecurrent}
            onChange={(event) => setIsRecurrent(event.target.checked)}
            className="checkbox"
          />
        </div>
        <div className="form-group">
          <label className="label">Feeling :</label>
          <input
            type="text"
            value={feeling}
            onChange={(event) => setFeeling(event.target.value)}
            className="input"
          />
        </div>
        <select
          value={lucidityLevel}
          onChange={(event) => setLucidityLevel(event.target.value)}
          className="select"
        >
          <option value="">Sélectionnez un niveau de lucidité </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <button type="submit" className="submit-button">
          Créer un nouveau rêve
        </button>
      </form>
    </>
  );
}
