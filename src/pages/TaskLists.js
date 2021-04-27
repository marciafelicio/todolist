import React, { useEffect, useState } from "react";
import { PageHeader } from "antd";
import axios from "axios";
import MinhaConta from "./MinhaConta";

const TaskLists = () => {
  const [list, setList] = useState([]);

  async function getLists() {
    const res = await axios.get("http://localhost:3004/lists");
    setList(res.data);
  }

  useEffect(() => {
    getLists();
  }, [])


  return (
    <>
      <PageHeader title="Listas" subTitle="Minhas Lista de Tarefas" />

      {list.map((item, index) => {
        return (
          <li style={item.status === "feito" ? { textDecoration: "line-through" } : {}} key={index}>
            <span>
              {item.name}
            </span>
          </li>
        );
      })}
      <MinhaConta />
    </>
  );
};
export default TaskLists;