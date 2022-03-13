import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './App.css';
import Modal from './components/Modal';

function App() {
  // OPEN API
  useEffect(() => {
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'elfLFMKSsi0Pu6q1m%2BGTESkE3tGmwmPuR8J6jp4IL6%2Fvu7ODA6VgJ8yZgLqFUEl2M16NeZZKQnit9qB%2FPlpw%2Fw%3D%3D';
    queryParams += '&' + encodeURIComponent('page') + '=' + encodeURI('1');
    queryParams += '&' + encodeURIComponent('perPage') + '=' + encodeURI('200');
    queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURI('json');

    var url = 'https://api.odcloud.kr/api/15041653/v1/uddi:223e0a0f-f812-423a-88ce-b742300ca156' + queryParams;
    
    axios.get(url)
    .then(response => setPets(response.data.data))
    .catch(err => console.log(err))
  }, [])

  // States
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // 검색창의 데이터 변수

  // Functions
  const onChangeSearchTerm = e => {
    setSearchTerm(e.target.value);
  }

  // Redux States
  var { isLogin, id } = useSelector(state => ({
    isLogin: state.loginReducer.isLogin,
    id: state.loginReducer.id
}))

  return (
    <div className="App">
      <div className='login'>
        <div className={isLogin ? 'greeting' : 'greeting hidden'}>{id}님 반갑습니다!</div>
        <div className='login_button'><Link to='/login'>{isLogin ? '로그아웃' : '로그인'}</Link></div>
      </div>
      <h1>댕댕이에게 멋진 이름 선물하기</h1>
      <form>
        <input type='text' placeholder='멋진 이름을 지어보세요...!'
               onChange={onChangeSearchTerm} />
      </form>
      <div className='result'></div>
      {pets.filter((val) => {
        if (searchTerm === '') {
          return null
        }
        else if (val.동물이름 === searchTerm) {
          return val
        }
      }).map((val, key) => {
        return (
          <div className='name' key={key}>
            <p>{val.동물이름}는 {val.합계}마리 있어요!</p>
          </div>
        )
      })}
      <Modal />
    </div>
  );
}

export default App;
