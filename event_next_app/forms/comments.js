import { useState,useEffect } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [resetForm,setResetForm] = useState(false)
  const [comments,setComments] = useState([])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => {
      return !prevStatus
    });
  }

  function addCommentHandler(commentData) {
    fetch(`/api/comment/${eventId}`,{
      method:"POST",
      body:JSON.stringify(commentData),
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((response)=>{
      if(!response.ok) throw new Error(response.statusText)
      return response.json()
    })
    .then(data=>{
      setResetForm(true)
      setComments(prevState=>([data.comment,...prevState]))
    })
    .catch(error=>alert(error))
  }

  function getComments(id){
    fetch(`/api/comment/${id}`)
    .then(response=>response.json())
    .then(data=>{
      setComments(data.comments)
    })
  }

  useEffect(()=>{
    if(showComments) getComments(eventId)
  },[showComments])

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} onResetForm={resetForm} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
