/* eslint-disable @typescript-eslint/no-unsafe-return */
import mockRouter from "next-router-mock";
import { render } from "@testing-library/react";

import { describe, it, vi, expect, beforeAll } from "vitest";

import LoginPage from "~/pages/login";

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
    const { getByText } = render(<LoginPage />);

    expect(getByText("Login page")).toBeVisible();
    expect(getByText("working")).toBeVisible();
  });
});
