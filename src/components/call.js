import React, { useEffect, useState } from "react";
import Unicorn from "./unicorn";

export default function Call() {
  const [unicorns, setUnicorns] = useState([]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/5355f94856914d71a0f289d491d693ab/unicorns")
      .then((response) => response.json())
      .then((data) => setUnicorns(data));
  }, []);
  return (
    <div>
      {unicorns.map((uni) => {
        return <Unicorn data={uni} key={uni._id} />;
      })}
    </div>
  );
}
