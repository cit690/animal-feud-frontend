import { getThemeProps } from '@mui/system'
import { Link } from 'react-router-dom'

function PostCard({post}) {
  console.log('post', post)
  return(
    <div className="card">
      <h4>{post.owner.name}</h4>
    <Link to="/thread">
      <h2>{post.content}</h2>
    </Link>
      <footer>{post.createdAt}</footer>
    </div>
  )
}

export default PostCard