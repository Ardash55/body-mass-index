import './App.css';
import { useState } from 'react';

function IndexBody() {
  let [massa, setMassa] = useState(0);
  let [hight, setHight] = useState(0);
  let [index, setIndex] = useState(0);

  let handleMassaChange = (e) => setMassa(Number(e.target.value));
  let handleHightChange = (e) => setHight(Number(e.target.value));

  return (
    <div>
      <p className='preview'>Калькулятор индекса массы тела</p>

      <div className='mainDiv'>

        <div className='leftDiv'>
          <p>Ваша масса</p>
          <input
            placeholder='Ваша масса'
            type='text'
            value={massa}
            onChange={handleMassaChange}
            className='leftInput'
          >
          </input>
        </div>

        <div className='rightDiv'>
          <p>
            Ваш рост
          </p>
          <input
            placeholder='Ваш рост'
            type='text'
            value={hight}
            onChange={handleHightChange}
            className='rightInput'
          >
          </input>
        </div>
      </div>
      <div>
        <button
          className='calculateButton'
          onClick={() => {
            let squarHight = hight * hight / 10000;
            setIndex(index = Math.round(massa / squarHight * 10) / 10);
          }}
        >
          Посчитать
        </button>
      </div>
      <p>Ваш Индекс Массы Тела: {index}</p>
    </div>
  )
}

function App() {
  return (
    <IndexBody />
  )
}

export default App;