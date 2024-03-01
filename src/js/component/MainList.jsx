import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const MainList = () => {

    const [todoList, setToDoList] = useState([]);

    const [inputValue, setInputValue] = useState("");

    // const [buttonDisplay, setButtonDisplay] = useState("firstButton");

    // let list = todoList.map((x) => x);

    const addItem = (item) => {
        var newList = [...todoList, item];
        setToDoList(newList);
        setInputValue("");

    }



    const removeItem = (ind) => {
        setToDoList(todoList.filter((elm, index) => index != ind))
    }

    return (
        <>

            <div className="row d-flex justify-content-center bg-light p-5">
                <div className="col-7 text-center heading"><h1>Amazing ToDo List</h1></div>
                <div className="col-7 bg-light border p-3 fs-4">
                    <input type="text" class="myInput" placeholder="What needs to be done?"
                        onChange={e => setInputValue(e.target.value)} value={inputValue}
                        onKeyDown={(e) => {
                            if (e.key === "Enter")
                                addItem(inputValue);
                        }}
                    />
                </div>
                {todoList.map((elm, ind) => {
                    return (
                        <div className="col-7 bg-light border p-3 fs-4">
                            <span>{todoList[ind]}</span>
                            <button className="myButton fs-4"
                                onClick={() => removeItem(ind)}
                            >  X  </button>
                        </div>
                    )
                })
                }

            </div >
        </>
    );
};

export default MainList;