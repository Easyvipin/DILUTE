const ErrorText = ({ message }) => {
  return (
    <h6 className=" text-red-400 text-center m-2 font-bold font-mono">
      {message}
    </h6>
  );
};

export default ErrorText;
