import { Comment } from "./comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/Romulo-BC.png"/>

          <div className={styles.authorInfo}>
            <strong>Romulo Costa</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio às 08:13h" dateTime="2023-01-08 17:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <p>
          Quaerat ducimus officiis error dolorum repudiandae numquam
          necessitatibus placeat?{" "}
        </p>
        <p>
          Laboriosam dolore suscipit sequi nobis minima, adipisci, doloribus
          similique pariatur repellendus iste impedit!
        </p>
        <p>
          <a href="#">teste/teste</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>{" "}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </form>
    </article>
  );
}
