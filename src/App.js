
import './App.css';
 import {Button} from  "./components/button"

function App() {
  return (
    <div className="App">
      <Button color={"white"} bgcolor={"blue"} border={"1px"} height={"45px"} width={"175px"} borderRadius={"50px"} >
        Primary Button
      </Button>
      <Button color={"black"} bgcolor={"white"}border={"1px solid blue"} height={"45px"} width={"175px"} borderRadius={"50px"} >
        Default Button
      </Button>
      <Button color={"black"} bgcolor={"white"} border={"1px solid black"} height={"45px"} width={"175px"} borderRadius={"50px"} >
        Dashed Button
      </Button>
      <Button color={"black"} bgcolor={"white"}border={"1px solid red"} height={"45px"} width={"175px"} borderRadius={"50px"} >
        Text Button
      </Button>
      <Button color={"rgb(36,144,254)"} bgcolor={"white"}border={"1px solid green"} height={"45px"} width={"175px"} borderRadius={"50px"} >
        Link Button
      </Button>
    </div>
  );
}

export default App;