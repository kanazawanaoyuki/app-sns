'use client';

import { FormEvent, useState } from 'react';

type Post = {
  id: number;
  content: string;
  likes: number;
};

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = inputText.trim();
    if (!trimmed) {
      return;
    }

    const newPost: Post = {
      id: Date.now(),
      content: trimmed,
      likes: 0,
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setInputText('');
  };

  const handleDelete = (id: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  const handleLike = (id: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post,
      ),
    );
  };

  return (
    <main className="container">
      <h1 className="title">かんたんSNS</h1>
      <p className="description">投稿・削除・いいねを学べるシンプルな1画面アプリ</p>

      <section className="card" aria-label="投稿フォーム">
        <h2 className="sectionTitle">投稿する</h2>
        <form onSubmit={handleSubmit} className="form">
          <textarea
            className="textarea"
            placeholder="いま何を思っていますか？"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
            rows={4}
          />
          <button type="submit" className="submitButton">
            投稿する
          </button>
        </form>
      </section>

      <section className="card" aria-label="投稿一覧">
        <h2 className="sectionTitle">投稿一覧</h2>

        {posts.length === 0 ? (
          <p className="emptyText">まだ投稿がありません。最初の投稿をしてみましょう。</p>
        ) : (
          <ul className="postList">
            {posts.map((post) => (
              <li key={post.id} className="postItem">
                <p className="postContent">{post.content}</p>
                <div className="actions">
                  <button
                    type="button"
                    onClick={() => handleLike(post.id)}
                    className="actionButton likeButton"
                  >
                    いいね ({post.likes})
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(post.id)}
                    className="actionButton deleteButton"
                  >
                    削除
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
