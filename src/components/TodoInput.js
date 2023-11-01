import React, { useState } from "react";
import toast from "react-hot-toast";
import {CiSquareRemove} from "react-icons/ci";
import {FiEdit} from "react-icons/fi";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const [secInput, setSecinput] = useState([]);
  const [isEdit, setIsEdit] = useState(0);
  const [edit, setEdit] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!secInput.includes(input)) {
      setSecinput([...secInput, input]);
    }
    if(edit){
      setSecinput(secInput.map((ele, index)=>{
        if(index === isEdit){
          return input;
        }
        return ele;
      }))
    }
    setInput("")
    setEdit(false)
    toast.success("Submit")
  }

  function removeHandler(index) {
    var val = secInput.filter((ele, id) => {
      return id !== index;
    });
    setSecinput(val);
    toast.success("remove");
  }

  function editHandler(index){
    var newEdit = secInput.find((item,id)=>{
      return id === index;
    })
    setInput(newEdit);
    setIsEdit(index);
    setEdit(true);
    toast.success("Edit")
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 justify-center mt-[20px]">
        <input
          className="md:w-[300px] w-[250px] p-2 py-3 rounded-md outline-none"
          type="text"
          placeholder="write here....."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
         {edit?<button className="bg-sky-400 p-2  rounded-md" onClick={onSubmit}>Edit</button>:<button className="bg-sky-400 p-1  rounded-md" onClick={onSubmit}>Submit</button>}
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-[20px] md:w-[1000px]">
        {secInput.map((item, index) => {
          return (
            <div className="bg-white p-2 rounded-md w-[200px] flex flex-col justify-between">
              <div className="text-ellipsis break-words">{item}</div>
              <div className="flex justify-between pt-3">
                <button onClick={()=>removeHandler(index)} className="text-2xl"><CiSquareRemove/></button>
                <button onClick={()=>editHandler(index)} className="text-xl"><FiEdit/></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoInput;
