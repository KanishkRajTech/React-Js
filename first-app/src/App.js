import Avtar from "./Avtar";
import {Card, Image} from "./Card";
import Counter from "./Counter";


function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <Avtar 
        src="https://tse1.mm.bing.net/th?id=OIP.vNw_hcxUnxGNxCk00eO6rQHaE8&pid=Api&P=0&h=180"
        width= "900px"
        height="500px"
      >
        <span>This child tag</span>
      </Avtar>
    </div>
  );
}

export default App;
