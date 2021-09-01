import React from 'react'
import { connect } from 'react-redux'
import { changeText } from '../redux/noteActions'
import { setNote } from './CreatePageSlice'

class CreateNoteForm extends React.Component {
  changeInputHandler = ({ target }) => {
    this.props.setNote(target.value)
  }

  render() {
    return (
      <div className='row'>
        <div className='col s8 offset-s2'>
          <div className='input-field'>
            <input
              name='note'
              type='text'
              placeholder='Заметка'
              value={this.props.newNote.note}
              onChange={this.changeInputHandler}
              // onKeyPress={pressHandler}
            />
            <label htmlFor='note'>Введите текст</label>
            <div>
              {/* {this.state.tags.map((tag) => {
                return (
                  <div className={'chip'} key={tag}>
                    {tag}
                  </div>
                )
              })} */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setNote,
}

const mapStateToProps = (state) => {
  return {
    newNote: state.createPage,
  }
}

export const CreatePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNoteForm)
