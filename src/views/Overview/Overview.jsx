import React from "react";
import Button from "common/Button/Button";
class Overview extends React.Component {
    render() {
        return (
            <div className="Overview">
                <Button
                    className="Button--Primary"
                    onClick={() => {}}>
                    Hello world
                </Button>
                <br /><br />
                <Button
                    className="Button--Secondary"
                    onClick={() => {}}>
                    Hello world
                </Button>
                <br /><br />
                <Button
                    className="Button--Tertiary"
                    onClick={() => {}}>
                    Hello world
                </Button>
                <br /><br />
                <Button
                    className="Button--Primary--Danger"
                    onClick={() => {}}>
                    Hello world
                </Button>
                <br /><br />
                <Button
                    className="Button--Secondary--Danger"
                    onClick={() => {}}>
                    Hello world
                </Button>
            </div>
        );
    }
}

export default Overview;
