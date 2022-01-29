import {Link} from 'react-router-dom'

const PostBlock = (props) => {

    return(
      <div className='PostBlock'>
      <div className="postblocktitle"><p>Mushroom <br/> Foraging Adventures</p></div>
      {props.posts.map( (page, i) => {
        return(
        <> 
        <article className='PostCard' key={'Post: ' + i} id={'Post: ' + i}>
          {/* {page.image? <div className = 'postImg' id={"Post" + i + 'image'}> <img src={page.image} alt='of something'/></div> : null} */}
          <h2>{page.title}</h2>
          <p>{page.text + '...'}</p>
          <p>{page.url?  <Link to={page.url} > read more </Link>  : null}</p>
        </article>
        {/* <div className={"Post" + i}> <img src={page.image? page.image: null}/></div> */}
        </> 
        )
      }
      )}
  
      </div>
    )
  }
  export default PostBlock;