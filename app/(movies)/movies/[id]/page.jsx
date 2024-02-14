import { Suspense } from "react"
import MovieInfo, { getMovie } from "../../../../Components/movie-info"
import MovieVideos from "../../../../Components/movie-videos";




// async function getVideos(id){
//       const response = await fetch(`${API_URL}/${id}/videos`);
//       return response.json();
// }

export async function generateMetadata({params:{id}}){
  //동적으로 메타데이터 호출할 수 있게한다 
  // 단 함수명이 generateMetadata이어야 하고 자동으로 프레임워크가 호출할수
  //있도록 export해야 함
  const movie = await getMovie(id);
  
 
  return {
    title:movie.title,
    // title: "fuckyour",
  };
}


export default async function MovieDetail({params:{id}}){
    // const movie = await getMovie(id);
    // const videos = await getVideos(id);
    // const [movie, videos]=await Promise.all([getMovie(id),getVideos(id)]);

    
    
    return (
      <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
          <MovieInfo id={id} />
        </Suspense>
        
        <Suspense fallback={<h1>Loading movie videos</h1>}>
          <MovieVideos id={id} />
        </Suspense>
      </div>
    );

} 

