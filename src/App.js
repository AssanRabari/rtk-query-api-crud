import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery } from './services/post';

function App() {
  // const { data, isError, isLoading, isSuccess } = useGetAllPostQuery();
  // const { data, isError, isLoading, isSuccess } = useGetPostByIdQuery(66);
  const { data, isError, isLoading, isSuccess } = useGetPostByLimitQuery(40);

  console.log(data)

  if (isLoading) return <div>Loading.....</div>
  if (isError) return <div>Error occured in api fetch</div>

  return (
    <div className="App">
      {/* all data */}
      <h1>RTK Query</h1>
      {/* {data.map((item, index) => (
        <div key={index}>
          <h2>{item.id}. {item.title}</h2>
          <p>{item.body}</p>
          <hr />
        </div>

      ))} */}

      {/* single post fetch */}
      {/* <h2>{data.id}. {data.title}</h2>
      <p>{data.body}</p> */}


      {/* fetch posts by limit */}
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.id}. {item.title}</h2>
          <p>{item.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
