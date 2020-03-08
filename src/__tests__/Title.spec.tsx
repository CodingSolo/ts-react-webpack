import React from "react";
import { render, cleanup } from "@testing-library/react";
import  Title  from "../components/Title";

beforeEach(cleanup);

describe('<Title />', () => {
    describe('Success', () => {
        it('render the Title', () => {
            const { queryByTestId } = render(
                <Title title="Hello" />
            );
        });
    });
});
