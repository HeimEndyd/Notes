import React from 'react'
import { connect } from 'react-redux'
import { changeText } from '../redux/noteActions'

class CreateNoteForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { ...props.state }
  }

  changeInputHandler = (event) => {
    event.persist()
    this.props.changeText(event.target.value)
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }))
  }

  render() {
    return (
      <div className='row'>
        <div className='col s8 offset-s2'>
          <div className='input-field'>
            <input
              placeholder='Заметка'
              id='note'
              type='text'
              name='note'
              value={this.state.note}
              onChange={this.changeInputHandler}
              // onKeyPress={pressHandler}
            />
            <label htmlFor='note'>Введите текст</label>
            <div>
              {this.state.tags.map((tag) => {
                return (
                  <div className={'chip'} key={tag}>
                    {tag}
                  </div>
                )
              })}
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

const mapStateToProps = (state) => ({
  state: state.newNoteReduser,
})

export const CreatePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNoteForm)
