import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import React from 'react';


function App() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
      axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL")
      .then((response) => {
        console.log("ok")
        console.log(response.data.posts)
        setPosts(response.data)
      }).catch(() => {
        console.log("erro")
      })
    
  }, [])

  return (
    <div>
      {posts?.map((post, key) =>{
      return(  
      <div key={key}>
        <td></td>
        <td>Libra Esterlina</td>
        <td>{post.bid}</td>
        <td>{post.create_date}</td>
      </div>)
    })}

<table>
  <tbody>
  <tr>
    <th>Região</th>
    <th>Moeda</th>
    <th>Preço</th>
    <th>Data</th>
  </tr>
  <tr>
        <td></td>
        <td>Libra Esterlina</td>
        <td></td>
      </tr>
  <tr>
    <td></td>
    <td>Euro</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Rubro</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Bitcoin</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Etherium</td>
    <td></td>
  </tr>
  </tbody>
</table>

</div>
  );
}

export default App;
