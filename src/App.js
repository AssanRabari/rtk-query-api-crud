import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from './services/post';
const updatedData = {
  id: 1,
  title: "foo",
  body: "bar",
  userId: 1
}

function App() {
  // const { data, isError, isLoading, isSuccess } = useGetAllPostQuery();
  // const { data, isError, isLoading, isSuccess } = useGetPostByIdQuery(66);
  // const { data, isError, isLoading, isSuccess } = useGetPostByLimitQuery(40);
  // const [deletePost, response] = useDeletePostMutation(1);
  // const [createPost, response] = useCreatePostMutation();
  const [updatePost, response] = useUpdatePostMutation();


  console.log(response)

  // if (isLoading) return <div>Loading.....</div>
  // if (isError) return <div>Error occured in api fetch</div>

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
      {/* {data.map((item, index) => (
        <div key={index}>
          <h2>{item.id}. {item.title}</h2>
          <p>{item.body}</p>
          <hr />
        </div>
      ))} */}

      {/* Delete data */}
      {/* <button onClick={() => deletePost(2)}>Delete</button> */}

      {/* Create data */}
      {/* <button onClick={() => createPost()}>Create</button> */}

      {/* update data */}
      <button onClick={() => updatePost(updatedData)}>Update</button>
    </div>
  );
}

export default App;
