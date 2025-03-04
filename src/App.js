import './App.css';
import { useState, useEffect } from 'react';

function IndexBody() {
  let [massa, setMassa] = useState(0);
  let [hight, setHight] = useState(0);
  let [index, setIndex] = useState(0);
  let [indexText, setIndexText] = useState('');
  let [massaStatus, setMassaStatus] = useState('');

  let handleMassaChange = (e) => setMassa(Number(e.target.value));
  let handleHightChange = (e) => setHight(Number(e.target.value));

  useEffect(() => {
    if (index == 0) {
      setMassaStatus(massaStatus = '');
    } else if (index > 0 && index <= 16) {
     setMassaStatus(massaStatus = 'Выраженный дефицит массы тела');
    } else if (index > 16 && index <= 18.5) {
     setMassaStatus(massaStatus = 'Дефицит массы тела');
    } else if (index > 18.5 && index <= 25) {
      setMassaStatus(massaStatus = 'Нормальная масса тела');
    }  else if (index > 25 && index <= 30) {
      setMassaStatus(massaStatus = 'Избыточная масса тела (предожирение)');
    } else if (index > 30 && index <= 35) {
      setMassaStatus(massaStatus = 'Ожирение первой степени');
    } else if (index > 35 && index <= 40) {
      setMassaStatus(massaStatus = 'Ожирение второй степени');
    } else if (index > 40) {
      setMassaStatus(massaStatus = 'Ожирение третьей степени');
    } 
  }, [index])

  return (
    <div>
      <p className='preview'>Калькулятор индекса массы тела</p>

      <div className='mainDiv'>

        <div className='leftDiv'>
          <p className='typeOfValue'>Ваша масса</p>
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
          <p className='typeOfValue'>
            Ваш рост (см)
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
      <div className='buttonDiv'>
        <button
          className='calculateButton'
          onClick={() => {
            let squarHight = hight * hight / 10000;
            setIndex(index = Math.round(massa / squarHight * 10) / 10);
            setIndexText(indexText = `Ваш индекс массы тела: ${index}`)
          }}
        >
          Посчитать
        </button>
      </div>
      <p className='finalOutput'>
        {indexText}
      </p>
      <p className='finalOutput'>
        {massaStatus}
      </p>
    </div>
  )
}

function App() {
  return (
    <IndexBody />
  )
}

export default App;