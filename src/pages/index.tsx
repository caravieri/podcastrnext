export default function Home(props) {
  return (
    <div>
      <h1></h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps(){
  const reponse = await fetch('http://localhost:3333/episodes')
  const data = await reponse.json()

  return{
    props: {
      episodes: data,
    },
    revalidate: 60 * 60* 8,
  }
}
