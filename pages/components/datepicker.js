import { useState } from 'react';
import { getPhoto } from '/pages/api/photo.js'
import datestyles from '../../styles/DatePicker.module.css'
import Emoji from '../components/Emoji.js'

export default function DatePicker() {

  const [date, setDate] = useState('1996-04-16');

  const handleSubmit = event => {
    event.preventDefault();
    console.log('setDate 👉️', date);

    getPhoto({date})
  };

  return (
    <form onSubmit={handleSubmit} className={datestyles.inputForm}>

      <input className={datestyles.inputDate} type="date" min="1995-06-16"
        onChange={event => setDate(event.target.value)}
        value={date}></input>

      <button className={datestyles.inputButton} type='submit'>Whoosh <Emoji symbol="🌠" label="meteoroid"/></button>
    </form>
  )
}
