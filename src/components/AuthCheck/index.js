const { useGetAuthQuery } = require("@containers/AuthContainer/authSlice");
const { useRouter } = require("next/router");

const AuthCheck = ({ children }) => {
  const user = {
    user: null,
  };
  const router = useRouter();

  console.log(user);

  if (typeof window !== "undefined" && user?.user === null) router.push("/");

  if (!user || user?.user === null) return <div>Loading....</div>;

  return children;
};

export default AuthCheck;
