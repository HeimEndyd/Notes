import React from 'react'
import { connect } from 'react-redux'
import { changeText } from '../redux/noteActions'

class CreateNoteForm extends React.Component {
  changeInputHandler = ({ target }) => {
    console.log(target.value)
    this.props.changeText(target.value)
    console.log(target.value)
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
  changeText,
}

const mapStateToProps = (state) => {
  return {
    newNote: state.newNoteReduser,
  }
}

export const CreatePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNoteForm)
