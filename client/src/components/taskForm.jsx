import { Formik, Form } from "formik";
import { useContext } from "react";
import { TaskContext } from "./TaskContext.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export function TaskForm() {
  const { createTask, getTask, updateTask } = useContext(TaskContext);
  const [task, setTask] = useState({
    title: "",
    description: ""
  });
  const Navigate = useNavigate();
  const params = useParams();
  console.log(params);

  useEffect(() => {
    if (params.id) {
      const loadTask = async () => {
        const res = await getTask(params.id);
        console.log(res);
        setTask(res);
      };
      loadTask();
    }
  }, []);

  return (
    <div className="text-center text-xl">
      <h1 className="text-white">{params.id ? "Edit Task" : "Create New Task"}</h1>
      <Formik
        enableReinitialize={true}
        initialValues={task}
        onSubmit={async (values) => {
          console.log(values);
           if(params.id){
             await updateTask(params.id, values);
             Navigate("/");
           }else{
             await createTask(values);
             Navigate("/");
           }
          setTask({
            title: '',
            description: ''
          });
        }}
      >
        {({
          handleSubmit,
          handleChange,
          errors,
          touched,
          values,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} className="bg-slate-300 flex flex-col p-5 rounded-xl my-5">
            <label className="p-2">Title</label>
            <input
              type="text"
              name="title"
              placeholder="write a title for the task"
              onChange={handleChange}
              value={values.title}
              required={true}
            ></input>
            {errors.email && touched.email && errors.email}
            <label className="p-3">Description</label>
            <textarea
              name="description"
              rows="10"
              placeholder="write a description"
              onChange={handleChange}
              value={values.description}
              required={true}
            ></textarea>
            {errors.password && touched.password && errors.password}
            <button className="bg-green-500 rounded-xl mt-5 p-2" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving" : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
