import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login Component Test Cases", () => {
  let userNameInput;
  let passwordInput;
  let subitButton;

  // it executes before each test is excuted
  beforeEach(() => {
    render(<Login />);
    userNameInput = screen.getByPlaceholderText("enter username");
    passwordInput = screen.getByPlaceholderText("enter password");
    subitButton = screen.getByRole("button");
  });

  // before any test is excuted this callback is excuted
  beforeAll(() => {
    // mocking of api call
  });

  // after all test are excuted this callback is excuted
  afterAll(() => {
    cleanup();
  });

  test("Is Form Rendered", () => {
    const userNameLabel = screen.getByText("UserName");
    const passwordLabel = screen.getByText("Password");
    expect(userNameLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(userNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(subitButton).toBeInTheDocument();
    expect(userNameInput.value).toBe("");
    expect(passwordInput.value).toBe("");
    expect(subitButton).toBeDisabled();
  });

  test("check for username change event", () => {
    expect(userNameInput.value).toBe("");
    expect(subitButton).toBeDisabled();
    expect(passwordInput.value).toBe("");
    fireEvent.change(userNameInput, { target: { value: "Surya" } });
    expect(userNameInput.value).toBe("Surya");
    expect(passwordInput.value).toBe("");
    expect(subitButton).toBeDisabled();
  });

  test("check for password change event", () => {
    expect(userNameInput.value).toBe("");
    expect(subitButton).toBeDisabled();
    expect(passwordInput.value).toBe("");
    fireEvent.change(passwordInput, { target: { value: "Surya" } });
    expect(passwordInput.value).toBe("Surya");
    expect(userNameInput.value).toBe("");
    expect(subitButton).toBeDisabled();
  });

  test("check for submit event", () => {
    expect(userNameInput.value).toBe("");
    expect(subitButton).toBeDisabled();
    expect(passwordInput.value).toBe("");
    fireEvent.change(passwordInput, { target: { value: "Surya" } });
    fireEvent.change(userNameInput, { target: { value: "Surya" } });
    expect(passwordInput.value).toBe("Surya");
    expect(userNameInput.value).toBe("Surya");
    expect(subitButton).toBeEnabled();
  });
});
