import React from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <b>이름 입력 : </b>
        <input name="name" value={name} onChange={onChange} />
        <br />
        <br />
        <b>닉네임 입력 : </b>
        <input
          name="nickname"
          value={nickname}
          onChange={onChange}
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
