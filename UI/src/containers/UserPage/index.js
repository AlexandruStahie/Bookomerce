import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div
                    style={{
                        marginLeft: "15rem",
                        marginRight: "25rem",
                        marginBottom: "1rem",
                        flexDirection: "row",
                        display: "flex"
                    }}
                >
                </div>
                <div
                    style={{
                        marginLeft: "15rem",
                        marginRight: "25rem",
                        flexDirection: "row",
                        display: "flex"
                    }}
                >
                    <div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                                width: "40rem"
                            }}
                        >
                            <h1 style={{ marginTop: 0 }}>User Details</h1>
                        </div>
                        <hr />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "2.5rem"
                            }}
                        >
                            <h3 style={{ marginTop: 0, width: "100%", fontWeight: "normal" }}>
                                User detail 1
                            </h3>
                            <h3 style={{ marginTop: 0, width: "100%", fontWeight: "normal" }}>
                                User detail 2
                            </h3>
                        </div>
                        <div
                            style={{
                                marginTop: "14.5rem",
                                width: "20rem"
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetails);
