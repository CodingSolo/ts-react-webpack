import React from "react";
import { render } from "@testing-library/react";
import Title from "../components/Title";

describe("<Title />", () => {
    describe("Success", () => {
        it("render the Title", () => {
            const { queryByTestId } = render(<Title title="Hello" />);
            expect(queryByTestId("title")).toBeTruthy();
        });
    });
});
