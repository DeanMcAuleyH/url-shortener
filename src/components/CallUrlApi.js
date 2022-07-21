import "./CallUrlApi.css";

const CallUrlApi = (props) => {
  return (
    <span className="actions">
      <button type="submit">{props.text}</button>
    </span>
  );
};

export default CallUrlApi;
