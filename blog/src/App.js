import React, { useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {

  useEffect(async() => {
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'elfLFMKSsi0Pu6q1m%2BGTESkE3tGmwmPuR8J6jp4IL6%2Fvu7ODA6VgJ8yZgLqFUEl2M16NeZZKQnit9qB%2FPlpw%2Fw%3D%3D';
    queryParams += '&' + encodeURIComponent('page') + '=' + encodeURI('1');
    queryParams += '&' + encodeURIComponent('perPage') + '=' + encodeURI('20');

    var url = 'https://api.odcloud.kr/api/15041653/v1/uddi:223e0a0f-f812-423a-88ce-b742300ca156' + queryParams;

    try{
      const response = await axios({
        method: 'get',
        url: url
      })
      console.log(response.data.data);
    }
    catch(err) {
      console.log(err);
    }
  },[])

  return (
    <div className="App">
      <h1>멍멍이에게 멋진 이름 선물하기</h1>
      <form>
        <input type='text' placeholder='멋진 이름을 지어보세요...!' />
        <button>시작!</button>
      </form>
    </div>
  );
}

export default App;
