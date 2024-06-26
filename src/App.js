import './App.css';
import { useGetAllPostQuery } from './services/post';

function App() {
  const { data, isError, isLoading, isSuccess } = useGetAllPostQuery();
  console.log(data)

  if (isLoading) return <div>Loading.....</div>
  if (isError) return <div>Error occured in api fetch</div>

  return (
    <div className="App">
      <h1>Hello RTK Query</h1>
      {data.map((item) => (
        <>
          <h2>{item.id}. {item.title}</h2>
          <p>{item.body}</p>
          <hr />
        </>

      ))}
    </div>
  );
}

export default App;
