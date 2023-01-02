import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import React from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";


function App() {
  const [posts, setPosts] = useState([]);
  const [posts2, setPosts2] = useState([]);
  const [posts3, setPosts3] = useState([]);
  const [posts4, setPosts4] = useState([]);
  const [posts5, setPosts5] = useState([]);
  const [posts6, setPosts6] = useState([]);
  const [posts7, setPosts7] = useState([]);
  const [posts8, setPosts8] = useState([]);
  const [posts9, setPosts9] = useState([]);
  const [posts10, setPosts10] = useState([]);

  useEffect(() => {
    axios
      .get("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL,RUB-BRL,CNY-BRL,JPY-BRL,CAD-BRL,ARS-BRL,BTC-BRL,DOGE-BRL")
      .then((response) => {
        setPosts(response.data.USDBRL);
        setPosts2(response.data.EURBRL);
        setPosts3(response.data.GBPBRL);
        setPosts4(response.data.RUBBRL);
        setPosts5(response.data.CNYBRL);
        setPosts6(response.data.JPYBRL);
        setPosts7(response.data.CADBRL);
        setPosts8(response.data.ARSBRL);
        setPosts9(response.data.BTCBRL);
        setPosts10(response.data.DOGEBRL);
      })
      .catch(() => {
        console.log("erro");
      });
      
  }
  , []);

  return (
       <>
      {Object.keys(posts).map((keyName, i) => {
    if (keyName === "create_date") {
      return (
        <table id="customers">
        <tr>
          <th id="regiao">Região</th>
          <th>Moeda</th>
          <th id="regiao">Símbolo</th>
          <th>Preço</th>
          <th>Última Atualização</th>
        </tr>
        <tr>
        <img id="bandeiras" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png"></img>
          <td>Real</td>
          <td id="textcenter">R$</td>
          <td>1.000</td>
          <td>-</td>
        </tr>
        <tr>
        <img id="bandeiras" src="https://static.todamateria.com.br/upload/ba/nd/bandeira_americana_bb.jpg"></img>
          <td>Dólar</td>
          <td id="textcenter">$</td>
          <td>{posts["bid"]}</td>
          <td>{posts["create_date"]}</td>
        </tr>
        <tr>
        <img id="bandeiras" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Canada_%283-2%29.svg/1024px-Flag_of_Canada_%283-2%29.svg.png"></img>
          <td>Dólar Canadense</td>
          <td id="textcenter">C$</td>
          <td>{posts7["bid"]}</td>
          <td>{posts7["create_date"]}</td>
        </tr>
        <tr>
          <img id="bandeiras" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png"></img>
          <td>Euro</td>
          <td id="textcenter">€</td>
          <td>{posts2["bid"]}</td>
          <td>{posts2["create_date"]}</td>
        </tr>
        <tr>
        <img id="bandeiras" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg/640px-Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg.png"></img>
          <td>Libra Esterlina</td>
          <td id="textcenter">£</td>
          <td>{posts3["bid"]}</td>
          <td>{posts3["create_date"]}</td>
        </tr>
        <tr>
        <img id="bandeiras" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png"></img>
          <td>Rublo Russo</td>
          <td id="textcenter">₽</td>
          <td>{posts4["bid"]}</td>
          <td>{posts4["create_date"]}</td>
        </tr>
        <tr>
        <img id="bandeiras" src="https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg"></img>
          <td>Yuan Chinês</td>
          <td id="textcenter">¥</td>
          <td>{posts5["bid"]}</td>  
          <td>{posts5["create_date"]}</td>
        </tr>
        <tr>
        <img id="bandeiras" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"></img>
          <td>Iene Japones</td>
          <td id="textcenter">¥</td>
          <td>{posts6["bid"]}</td>  
          <td>{posts6["create_date"]}</td>
        </tr>
        <tr>
        <img id="bandeiras" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Argentina_%283-2%29.svg"></img>
          <td>Peso Argentino</td>
          <td id="textcenter">$</td>
          <td>{posts8["bid"]}</td>  
          <td>{posts8["create_date"]}</td>
        </tr>
        <tr>
        <img id="bandeiras" src="https://upload.wikimedia.org/wikipedia/commons/d/da/International_Flag_of_Planet_Earth_%28Variant%29.svg"></img>
          <td>Bitcoin</td>
          <td id="textcenter">₿</td>
          <td>{posts9["bid"]+'k'}</td>  
          <td>{posts9["create_date"]}</td>
        </tr>
        <tr>
        <img id="bandeiras" src="https://upload.wikimedia.org/wikipedia/commons/d/da/International_Flag_of_Planet_Earth_%28Variant%29.svg"></img>
          <td>Dogecoin</td>
          <td id="textcenter">Ð</td>
          <td>{posts10["bid"]}</td>  
          <td>{posts10["create_date"]}</td>
        </tr>
               
      </table> 
      
      );
    }
  })}
    </>
    
  );
  
}

export default App;
