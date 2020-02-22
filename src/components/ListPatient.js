import React, { Component } from "react";
import axios from 'axios'

const Patient = ({ firstname, lastname, email, phone, subject }) => {
  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{subject}</td>
    </tr>
  );
};

class ListPatient extends Component {
  constructor() {
    super()

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:8081/patient/show")
      .then(res => {
        const items = res.data

        this.setState({ items })
      })
  }

  render() {
    const { items } = this.state

    return (
      <table>
        <thead>
          <tr>
            <th>non</th>
            <th>prénom</th>
            <th>email</th>
            <th>téléphone</th>
            <th>sujet</th>
          </tr>
        </thead>
        <tbody>
        {items.map(patient => (
          <Patient
            key={patient._id}
            firstname={patient.firstname}
            lastname={patient.lastname}
            email={patient.email}
            phone={patient.phone}
            subject={patient.subject}
          />)
        )}
        </tbody>
      </table>
    );
  }
}

export default ListPatient;
