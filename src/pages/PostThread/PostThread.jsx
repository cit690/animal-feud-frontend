import {useState, useRef, useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { getThread } from '../../services/postService'

function PostThread(props) {
  const location = useLocation()
  const [postThread, setPostThread] = useState({})
  const { id } = useParams()
  console.log(id)
  useEffect(() => {

  },[id])
return(<>
  <div>
    <h1>Post Thread</h1>
    <h2> {postThread._id} </h2>
  </div>
</>)
}

export default PostThread;