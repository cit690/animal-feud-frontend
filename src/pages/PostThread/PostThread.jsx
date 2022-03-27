import {useState, useRef, useEffect} from 'react'
import PostCard from '../../components/PostCard/PostCard';

function PostThread(props) {
  const [formData, setFormData] = useState({
    content: ''
  })
return(<>
<h2>
  {/* {props.posts.map(post => (
    <PostCard />
  ))}    */}
</h2>
</>)
}

export default PostThread;