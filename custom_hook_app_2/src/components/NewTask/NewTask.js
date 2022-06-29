import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/useHttp';

const NewTask = (props) => {
  const {isLoading,error,sendRequest:sendTaskRequest} = useHttp()

  const enterTaskHandler = async (taskText) => {

    const createTask = data => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
  
      props.onAddTask(createdTask);
    }

    sendTaskRequest({
      url:'https://react-http-52c30-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
      method:"POST",
      body: JSON.stringify(taskText),
      headers: {
        'Content-Type': 'application/json',
      }
    },createTask)

  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
