import ReactDOM from "react-dom";
import { Login } from "../../src/components/Login";

describe("Login component test suite", () => {
  //   beforeAll(() => {
  //     console.log("before all");
  //   });

  //   afterAll(() => {
  //     console.log("after all");
  //   });

  let container: HTMLDivElement;
  const authServiceMock = { login: jest.fn() };
  const setUserMock = jest.fn();

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    // disable eslint warning to follow Udemy lecture
    // eslint-disable-next-line testing-library/no-render-in-setup
    ReactDOM.render(
      <Login authService={authServiceMock as any} setUser={setUserMock} />,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
    jest.clearAllMocks();
  });

  test("renders correctly initial document", () => {
    const title = document.querySelector("h2");
    expect(title?.textContent).toBe("Please login");

    const inputs = document.querySelectorAll("input");
    expect(inputs).toHaveLength(3);
    expect(inputs[0].value).toBe("");
    expect(inputs[1].value).toBe("");
    expect(inputs[2].value).toBe("Login");

    const label = document.querySelector("label");
    expect(label).not.toBeInTheDocument();
  });
});
