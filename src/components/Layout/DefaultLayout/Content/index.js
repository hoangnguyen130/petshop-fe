import Post from "../../Post";

function Content() {
  const posts = [
    {
      id: 1,
      userInfo: {},
      caption: '',
      imgs: {},
    },
    {
      id: 2,
      userInfo: {},
      caption: '',
      imgs: {},
    },
    {
      id: 3,
      userInfo: {},
      caption: '',
      imgs: {},
    },
    {
      id: 4,
      userInfo: {},
      caption: '',
      imgs: {},
    }
  ]
  return ( 
    <div className="">
      {posts.map((post, i) => (
        <Post key={i} value={post}/>
      ))}
    </div>
   );
}

export default Content;