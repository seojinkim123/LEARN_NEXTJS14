//프레임워크는 우리의 코드를 호출한다.
//우리가 Nextjs를 호출하는 것이 아니다.

import Link from "next/link";
import Movie from "../../Components/movie";
import styles from "../../styles/home.module.css"

export const metadata = {
  title: "Home",
};
//메타데이터는 use client 와 같이 사용할 수 없다.

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve)=>setTimeout(resolve,1000));
  const response = await fetch(API_URL);
  
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  // async 로 바꾼다.(await를 사용하면 있어야 함)
  const movies = await getMovies(); 
  // return (
  //   <div>
  //     {movies.map(movie=>
  //       <div key={movie.id}>
  //         <img src={movie.poster_path} alt={movie.title} />
  //         <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
  //       </div>
  //     )}
  //   </div>
  // );
  // component 화해서 분리하였다. 
  
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} title={movie.title}  id={movie.id} poster_path={movie.poster_path}/>
      ))}
    </div>
  );

}
