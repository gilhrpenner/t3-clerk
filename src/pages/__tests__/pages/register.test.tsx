/* eslint-disable @typescript-eslint/no-unsafe-return */
import mockRouter from "next-router-mock";
import { render } from "@testing-library/react";

import { describe, it, vi, expect, beforeAll } from "vitest";

import RegisterPage from "~/pages/register";
import { ClerkProvider } from "@clerk/nextjs";

const dontJudgeMe =
  "pk_test_ZGVjaWRpbmctcmhpbm8tNDEuY2xlcmsuYWNjb3VudHMuZGV2JA";

beforeAll(() => {
  vi.mock("next/router", () => ({
    ...require("next-router-mock"),
    useRouter: () => ({
      ...mockRouter,
      query: {
        test: "working",
      },
    }),
  }));
});

describe("pages/register", () => {
  it("should render the register page", () => {
    console.log("testing key:", dontJudgeMe);
    const { getByText } = render(
      <ClerkProvider publishableKey={dontJudgeMe}>
        <RegisterPage />
      </ClerkProvider>
    );

    expect(getByText("Login page")).toBeVisible();
    expect(getByText("working")).toBeVisible();
  });
});
