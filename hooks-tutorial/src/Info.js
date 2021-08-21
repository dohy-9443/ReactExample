import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  }

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
