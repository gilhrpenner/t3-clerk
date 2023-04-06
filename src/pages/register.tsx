/* eslint-disable @typescript-eslint/no-misused-promises */
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";

const Register: NextPage = () => {
  const router = useRouter();
  const { test } = router.query;

  const [email, setEmail] = useState("");
  const [mfaCode, setMfaCode] = useState("");

  const { signUp } = useSignUp();

  const handleEmailVerification = async () => {
    console.log("Signing up...");
    await signUp?.create({
      emailAddress: email,
      // firstName: "Test", bonus problem, this doesn't work
      // lastName: "User",
    });

    await signUp?.prepareEmailAddressVerification();
  };

  const handleMFAConfirmation = async () => {
    console.log("Confirming MFA...");
    await signUp?.attemptEmailAddressVerification({
      code: mfaCode,
    });
  };

  return (
    <div className="p-10">
      <h1>
        <strong>Register page</strong>
      </h1>

      <div>
        test query param: <strong>{test}</strong>
      </div>
      <div>
        publishableKey:{" "}
        <strong>{process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}</strong>
      </div>

      <div className="mt-10">
        <label htmlFor="emailInput">
          Email
          <input
            id="emailInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="ml-2 rounded-md border border-gray-300 p-2"
          />
        </label>

        <button
          onClick={handleEmailVerification}
          className="mt-4 block rounded-md border-2 px-4 py-1"
        >
          Prepare email verification
        </button>
      </div>
      <div className="mt-20">
        <label htmlFor="mfaCode">
          Confirmation code
          <input
            id="mfaCode"
            type="text"
            value={mfaCode}
            onChange={(e) => setMfaCode(e.target.value)}
            className="ml-2 rounded-md border border-gray-300 p-2"
          />
        </label>

        <button
          onClick={handleMFAConfirmation}
          className="mt-4 block rounded-md border-2 px-4 py-1"
        >
          Attempt email verification
        </button>
      </div>
    </div>
  );
};

export default Register;
