import classes from './comment-list.module.css';

function CommentList(props) {

  return (
    <ul className={classes.comments}>
      {props.items.map(val=>(
        <li key={val._id}>
          <p>{val.text}</p>
          <div>
            By <address>{val.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
