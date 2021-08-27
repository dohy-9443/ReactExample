import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
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
        <input
          name="name"
          value={name}
          onChange={onChange}
          placeholder="이름"
        />
        &nbsp;&nbsp;
        <input
          name="nickname"
          value={nickname}
          onChange={onChange}
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
