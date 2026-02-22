import "./styles.css";
import { tasks } from "./data";
import { MenuList } from "./MenuList";
import { Header } from "./Header";
export default function App(props) {
  return (
    <div className="App">
      <Header/>
      <MenuList />
    </div>
  );
}
