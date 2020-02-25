import React, { Component } from 'react'
import '../addnote/addNote.css'

class AddNote extends Component {

  state = {
    notes: ''
  }
  handleChange = (e) => {
    this.setState({
      note: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.AddNote(this.state);
    this.setState({
      notes: [
        { title: e.target.value }
      ]
    })
  }
  render() {
    return (
      <div className="AddNote">
        <div className="row">
          <div className="col xll8">
            <div className="ShowcaseImg">
            </div>
          </div>
          <div className="col xll4">
            <div className="form-wrapper">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Title</label>
                <input type="text" onChange={this.handleChange} /> <br />
                <label htmlFor="nots">Note content</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button className="btn">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddNote;