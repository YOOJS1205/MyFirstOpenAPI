import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './App.css';

function App() {
  const [pets, setPets] = useState([]);
  const [name, setName] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  }

  const userInfo = useSelector((currentState) => currentState);

  // 콜백함수


  console.log(pets);
  useEffect(() => {
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'elfLFMKSsi0Pu6q1m%2BGTESkE3tGmwmPuR8J6jp4IL6%2Fvu7ODA6VgJ8yZgLqFUEl2M16NeZZKQnit9qB%2FPlpw%2Fw%3D%3D';
    queryParams += '&' + encodeURIComponent('page') + '=' + encodeURI('1');
    queryParams += '&' + encodeURIComponent('perPage') + '=' + encodeURI('20');
    queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURI('json');

    var url = 'https://api.odcloud.kr/api/15041653/v1/uddi:223e0a0f-f812-423a-88ce-b742300ca156' + queryParams;
    
    axios.get(url)
    .then(response => setPets(response.data.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <div className='login'>
        <div className={userInfo.isLogin ? 'greeting' : 'greeting hidden'}>{userInfo.id}님 반갑습니다!</div>
        <div className='login_button'><Link to='/login'>로그인</Link></div>
      </div>
      <h1>멍멍이에게 멋진 이름 선물하기</h1>
      <form>
        <input type='text' placeholder='멋진 이름을 지어보세요...!'
               onChange={onChangeName} />
        <button>시작!</button>
      </form>
      <div className='result'></div>
      <ul>
        {pets.map((pet, index) => <li key={pets.index}>{pet.동물이름}, {pet.합계}</li>)}
      </ul>
    </div>
  );
}

export default App;
