import "./index.css";
import { useState } from "react";

function App() {
  const [todolist, settodolist] = useState([]);
  const [newtask, setnewtask] = useState("");
  const [updatedata, setupdatedata] = useState("");

  // this is the input field value
  const handleChange = (e) => {
   setnewtask(e.target.value);
  };
  // this is the input field value - end

  // this is add task function
  const addTask = () => {
    const task = {
      id: todolist.length + 1,
      taskName: newtask,
    };
    settodolist([...todolist, task]);
    setnewtask("");
  };
  // this is add task function - end

  // this is edit task function
  const EditTask = () => {
    let filterRecord = [...todolist].filter(
      (task) => task.id !== updatedata.id
    );
    let editedobject = [...filterRecord, updatedata];
    settodolist(editedobject);
    setupdatedata("");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updatedata.id,
      taskName: e.target.value,
    };
    setupdatedata(newEntry);
  };

  //this is edit task function - end

  //this is delete task function
  const deletetask = (id) => {
    settodolist(todolist.filter((task) => task.id !== id));
  };

  //this is delete task function - end

  return (
    <div className="App">
      {/* this add task section */}
      <div className="addTask">
        <input required value={updatedata ? updatedata && updatedata.taskName : newtask} onChange={updatedata ? (e) => changeTask(e) : handleChange} />
        <button onClick={updatedata ?EditTask: addTask} >{updatedata ? "edit" : "add"}</button>
      </div>
      {/* this add task section - end  */}

      {/* this is task list */}
      <div className="list">
        {todolist.sort((a, b) => a.id - b.id ).map((task) => {
          return (
            <div className="container">
              <div className="remove">
                {task.taskName}
                <div className="action">
                  <button onClick={() => setupdatedata(task)}>Edit</button>
                  <button onClick={() => deletetask(task.id)}>x</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* this is task list  - end*/}
    </div>
  );
}

export default App;
