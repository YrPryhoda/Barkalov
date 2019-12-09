import React from 'react';
import { Result } from '../renderUI/render-ui';

const WizzardResult = ({ res }) => {
  if (res) {
    const xhr = new XMLHttpRequest();
    const json = JSON.stringify(res);
    xhr.open("POST", 'http://localhost:8080', true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
    console.log(json);
  } else {
    console.log('Ошибка отправки на сервер');
  }


  return (
    <Result res={'Count from server'} />
  )
}

export default WizzardResult;






/* */