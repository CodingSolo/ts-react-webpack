import React, { FunctionComponent } from "react";

interface Props {
    title: string;
}

const Title: FunctionComponent<Props> = ({ title }) => (
    <h1 data-testid="title"> {title} </h1>
);

export default Title;
