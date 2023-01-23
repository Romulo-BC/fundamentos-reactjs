import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lionel Messi"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error est blanditiis, quisquam officia laborum cupiditate. Repellat laborum itaque aliquid, repudiandae quisquam consequuntur sed vero autem nisi porro ab natus."
          />
          <Post
            author="Cristiano Ronaldo"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error est blanditiis, quisquam officia laborum cupiditate. Repellat laborum itaque aliquid, repudiandae quisquam consequuntur sed vero autem nisi porro ab natus."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
