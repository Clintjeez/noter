import React, { Component } from 'react'
import './home.css'
import Note from '../notes/Note'

class Home extends Component {
  state = {
    notes: [
      { id: 1, title: 'Heading Text', content: 'this is note content', date: 'Feb 21' },
      { id: 2, title: 'Heading Text', content: 'this is note content', date: 'Feb 22' },
      { id: 3, title: 'Heading Text', content: 'this is note content', date: 'Feb 23' },
      { id: 4, title: 'Heading Text', content: 'this is note content', date: 'Feb 24' }
    ]
  }
  deleteNote = (id) => {
    const notes = this.state.notes.filter(notes => {
      return notes.id !== id
    });
    this.setState({
      notes
    })
  }
  addNote = (note) => {

  }
  render() {
    return (
      <div className="home">
        <div className="row">
          <div className="col xll8">
            <div className="ShowcaseImg">
            </div>
          </div>
          <div className="col xll4">
            <Note notes={this.state.notes} deleteNote={this.deleteNote} />
            <a class="btn-floating right" href="/AddNote"><i class="material-icons">New</i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;