import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("마운트될 때만 실행됨");
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div
      style={{
        border: "5px solid #f9d9ca",
        background: "#f0e4d4",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div>
        <input value={name} onChange={onChangeName} placeholder="이름" />
        &nbsp;&nbsp;
        <input
          value={nickname}
          onChange={onChangeNickname}
          placeholder="닉네임"
        />
      </div>
      <br />
      <div>
        <div style={{ color: "#d18063" }}>
          <b>이름 : </b> {name}
        </div>
        <div style={{ color: "#d18063" }}>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
