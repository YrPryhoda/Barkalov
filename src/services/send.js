
const SendPOST =  ({ count }) => {
  const xhr = new XMLHttpRequest();
  const json = JSON.stringify({ count });
  xhr.open("POST", 'http://localhost:8080', true)
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
 
  
  xhr.send(json);
  console.log('sended');
}


export default SendPOST;