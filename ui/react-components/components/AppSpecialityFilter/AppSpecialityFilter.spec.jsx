import React from "react";
import { render, wait } from "@testing-library/react";
import AppSpecialityFilter from "./AppSpecialityFilter";
import { renderWithReactIntl } from "../../utils/TestUtil";
import "@testing-library/jest-dom/extend-expect";

describe("Should check length", () => {
  it("Check if nodeList is empty", async () => {
    const nodes = [];

    const { container } = await renderWithReactIntl(
      <AppSpecialityFilter nodes={nodes} />
    );
    expect(container.getElementsByClassName("rc-tree-treenode").length).toBe(
      nodes.length
    );
  });
});

describe("Tree should be visible", () => {
  it("should be visible", async () => {
    const { getByTestId } = await renderWithReactIntl(<AppSpecialityFilter />);
    expect(getByTestId("tree")).toBeInTheDocument();
  });
});

describe("Checked if class is present", () => {
  it("checkable", async () => {
    const { asFragment } = await renderWithReactIntl(
      <AppSpecialityFilter checkable></AppSpecialityFilter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
