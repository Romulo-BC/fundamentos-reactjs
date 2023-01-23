import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Romulo-BC.png",
      name: "Romulo Costa",
      role: "Dev"
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {type: 'paragraph', content: 'Quaerat ducimus officiis error dolorum repudiandae numquam necessitatibus placeat?'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-01-21 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Dev"
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {type: 'paragraph', content: 'Quaerat ducimus officiis error dolorum repudiandae numquam necessitatibus placeat?'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-01-16 20:00:00')
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
