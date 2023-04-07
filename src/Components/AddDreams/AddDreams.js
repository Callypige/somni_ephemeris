import React, { useState } from "react";
import "./AddDreams.css";

export default function AddDreams() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [lucidityLevel, setLucidityLevel] = useState("");


  const handleNewDream = () => {
    const newDream = {
      title,
      description,
      date,
      lucidityLevel,
    };
    database.ref("dreams").push(newDream);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // faire quelque chose avec les données du formulaire
    console.log({ title, date, description, lucidityLevel });
    alert(title)
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3 className="title-add_dream">Veuillez décrire votre dernier rêve</h3>
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
        <label className="label">Niveau de lucidité :</label>
        <select
          value={lucidityLevel}
          onChange={(event) => setLucidityLevel(event.target.value)}
          className="select"
        >
          <option value="">Sélectionnez un niveau</option>
          <option value="faible">
            Faible (Presque eu l'impression que le rêve était vraiment réel)
          </option>
          <option value="moyen">
            Moyen (Un peu flou, ni trop réel, ni trop lucide)
          </option>
          <option value="élevé">
            Élevé (Réelle prise de conscience, jusqu'à interpeller un autre
            personnage du rêve en déclarant être en train de rêver)
          </option>
        </select>
      </div>
      <button type="submit" className="submit-button">
        Créer un nouveau rêve
      </button>
    </form>
  );
}