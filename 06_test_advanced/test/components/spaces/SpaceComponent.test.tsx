import { fireEvent } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { SpaceComponent } from "../../../src/components/spaces/SpaceComponent";

describe("Space component test suite", () => {
  let container: HTMLDivElement;
  const reserveSpaceMock = jest.fn();
  const cleanupTests = () => {
    document.body.removeChild(container);
    container.remove();
    jest.clearAllMocks();
  };
  const setupTests = (element: React.FunctionComponentElement<any>) => {
    container = document.createElement("div");
    document.body.appendChild(container);
    // eslint-disable-next-line testing-library/no-render-in-setup
    ReactDOM.render(element, container);
  };

  describe("tests with photo URL", () => {
    beforeEach(() => {
      setupTests(
        <SpaceComponent
          location="someLocation"
          name="someName"
          reserveSpace={reserveSpaceMock}
          spaceId="123"
          photoUrl="some.url"
        />
      );
    });

    afterEach(() => {
      cleanupTests();
    });

    test("show image correctly", () => {
      // eslint-disable-next-line testing-library/no-node-access
      const image = container.querySelector("img");
      expect(image).toBeInTheDocument();
      expect(image!.src).toBe("http://localhost/some.url");
    });

    test("show labels correctly", () => {
      // eslint-disable-next-line testing-library/no-node-access
      const labels = container.querySelectorAll("label");

      expect(labels[0]).toHaveTextContent("someName");
      expect(labels[1]).toHaveTextContent("123");
      expect(labels[2]).toHaveTextContent("someLocation");
    });

    test("reserve spaces", () => {
      // eslint-disable-next-line testing-library/no-node-access
      const button = container.querySelector("button");

      fireEvent.click(button!);
      expect(reserveSpaceMock).toBeCalledWith("123");
    });
  });

  describe("tests without photo URL", () => {
    beforeEach(() => {
      setupTests(
        <SpaceComponent
          location="someLocation"
          name="someName"
          reserveSpace={reserveSpaceMock}
          spaceId="123"
        />
      );
    });

    afterEach(() => {
      cleanupTests();
    });

    test("show image correctly", () => {
      // eslint-disable-next-line testing-library/no-node-access
      const image = container.querySelector("img");
      expect(image).toBeInTheDocument();
      expect(image!.src).toBeFalsy();
    });
  });
});
