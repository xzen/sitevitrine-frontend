import React, { Component } from "react";
import axios from "axios"

class Contact extends Component {
  constructor() {
    super()

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      subject: '' 
    }

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onClick(e) {
    e.preventDefault()

    axios
      .post("http://localhost:8081/patient/create", this.state)
      .then(resp => {
        this.setState({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          subject: ''
        })
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    const { firstName, lastName, email, phone, subject } = this.state

    return (
      <div id={"contact"}>
        <div className="container mt-4">
          <form>
            <h2>Prendre contact</h2>

            <div className="row mt-3">
              <div className="col">
                <label htmlFor="firstName">Nom</label>
                <input type="text" name="firstname" className="form-control" defaultValue={firstName} onChange={e => this.onChange(e)} />
              </div>
              <div className="col">
                <label htmlFor="lastName">Prénom</label>
                <input type="text" name="lastname" className="form-control" defaultValue={lastName} onChange={e => this.onChange(e)} />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" className="form-control" defaultValue={email} onChange={e => this.onChange(e)} />
              </div>
              <div className="col">
                <label htmlFor="phone">Téléphone</label>
                <input type="tel" name="phone" className="form-control" defaultValue={phone} onChange={e => this.onChange(e)} />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <label htmlFor="text">Subject</label>
                <textarea type="text" name="subject" className="form-control" defaultValue={subject} onChange={e => this.onChange(e)} />
              </div>
            </div>

            <div className="row mt-3 mb-3">
              <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={e => this.onClick(e)}>
                Envoyer ma demande
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
