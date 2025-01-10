import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch tasks from the API
    axios
      .get("http://127.0.0.1:8000/api/user/") // Update the URL if needed
      .then((response) => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("An error occurred while fetching tasks.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} - {task.completed ? "Completed" : "Not Completed"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
