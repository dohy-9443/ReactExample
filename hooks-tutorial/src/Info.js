import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <b>이름 입력 : </b>
        <input value={name} onChange={onChangeName} />
        <br />
        <br />
        <b>닉네임 입력 : </b>
        <input
          value={nickname}
          onChange={onChangeNickName}
          placeholder={name}
        />
      </div>
      <br />
      <br />
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
