import React from "react";

const AdminBlog = () => (
  <div id="conponent-body">
    <p>page article admin.</p>
    <div className="form-group">
      <label for="exampleInputPassword1">Titre</label>
      <input type="text" className="form-control" id="title-admin" />
    </div>
    <div>
      <h4>Insert une image</h4>
      <img src="..." alt="..." className="img-thumbnail" />
    </div>
    <div className="form-group">
      <label htmlFor="date-creation">Date</label>
      <input type="date" id="date-creation" className="form-control" />
    </div>
    <div className="form-group">
      <label for="author">Auteur</label>
      <input type="text" className="form-control" id="author-admin" />
    </div>
    <button>Supprimer</button>
    <button>Modifier</button>
    <button>Enregistrer</button>
  </div>
);

export default AdminBlog;
