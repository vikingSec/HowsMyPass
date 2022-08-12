import Styles from './styles'
import React from 'react'
import SubmitButton from '../SubmitButton/SubmitButton';

interface _SearchBar {
  changePass : (newpass : string) => void;
  pass? : string;
}

export default function SearchBar({changePass, pass} : _SearchBar) {
  const searchdiv = Styles.searchdiv;
  const bardiv = Styles.bardiv;


  return (
    <div style={searchdiv}>
      <input type="text" onChange={(e) => changePass(e.target.value)} style={bardiv} placeholder={"Let's test your password..."}/>
      <SubmitButton />
    </div>
  )
}
