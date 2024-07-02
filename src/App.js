import './App.css';
import Header from './components/Header.jsx'

function App() {
  const frutas = [
    { id: 1, text: 'banana'},
    { id: 2, text: 'morango'},
    { id: 3, text: 'laranja'} ,
    { id: 4, text: 'damasco'} ,
  ];

  return (
    <div className='App'> 
      <Header content={frutas}/>
    </div>
  );
  
}

export default App;
