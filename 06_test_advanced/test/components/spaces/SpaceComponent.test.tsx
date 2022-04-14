import ReactDOM from "react-dom";
import { SpaceComponent } from "../../../src/components/spaces/SpaceComponent";

describe("Space component test suite", () => {
  let container: HTMLDivElement;
  const reserveSpaceMock = jest.fn();

  describe("tests with photo URL", () => {
    beforeEach(() => {
      container = document.createElement("div");
      document.body.appendChild(container);
      // eslint-disable-next-line testing-library/no-render-in-setup
      ReactDOM.render(
        <SpaceComponent
          location="someLocation"
          name="someName"
          reserveSpace={reserveSpaceMock}
          spaceId="123"
        />,
        container
      );
    });

    afterEach(() => {
      document.body.removeChild(container);
      container.remove();
      jest.clearAllMocks();
    });

    test("basic rendering", () => {});
  });

  describe("tests without photo URL", () => {});
});
