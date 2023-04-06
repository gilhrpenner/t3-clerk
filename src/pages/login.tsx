import { type NextPage } from "next";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();
  const { test } = router.query;

  return (
    <div className="p-10">
      <h1>
        <strong>Login page</strong>
      </h1>
      test query param: <strong>{test}</strong>
    </div>
  );
};

export default Login;
