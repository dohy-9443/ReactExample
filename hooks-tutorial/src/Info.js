import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("특정 값이 업데이트될 때만 실행됩니다.");
    console.log(name);
  }, [name]);

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
