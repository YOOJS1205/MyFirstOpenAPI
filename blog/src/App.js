import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pets, setPets] = useState([]);
  const [redundancy, setRedundancy] = useState(false);
  const [name, setName] = useState('');

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      setName(e.target.value);
      for (var i = 0; i < pets.length; i++) {
        if (e.target.value === pets[i].동물이름 && redundancy === false) {
          setRedundancy(true);
        }
        else if (e.target.value !== pets[i].동물이름 && redundancy === true) {
          setRedundancy(false);
        }
        else if (e.target.value === pets[i].동물이름 && redundancy === true) {
          setRedundancy(true);
        }
        e.preventDefault();
        break;
      }
    }
  }
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
      <h1>멍멍이에게 멋진 이름 선물하기</h1>
      <form>
        <input type='text' placeholder='멋진 이름을 지어보세요...!' onKeyPress={onKeyPress}
               onSubmit='return false' />
        <button>시작!</button>
      </form>
      <div className='result'>{redundancy ? 
                              `송파구에 ${name}는 마리 있어요!` : 
                              `송파구에 ${name}는 없어요!`}</div>
      <ul>
        {pets.map((pet) => <li key={pet.index}>{pet.동물이름}, {pet.합계}</li>)}
      </ul>
    </div>
  );
}

export default App;
