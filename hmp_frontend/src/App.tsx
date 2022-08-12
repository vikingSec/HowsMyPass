import React, {useState} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Styles from './styles'



function App() {
  const appcon = Styles.appcon;
  const [password, changePass] = useState('')
  const handlePass = (newpass : string) => {
    changePass(newpass)
  }
  return (
    <div className="App" style={appcon}>
      <SearchBar changePass={handlePass} />
    </div>
  );
}

export default App;
