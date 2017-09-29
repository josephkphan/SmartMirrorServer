import React from "react";

export default class Support extends React.Component {
    render() {
        const containerStyle = {
            marginTop: "60px"
        };

        return (
            <div className="content" style={containerStyle}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="card">
                                <div className="header text-center">
                                    <h4 className="title">Having Problems?</h4>
                                    <p className="category">Please feel free to contact us for any questions you may
                                        have.</p>
                                    <br></br>
                                </div>
                                <div className="content table-responsive table-full-width table-upgrade">
                                    <table className="table">
                                        <thead>
                                        <th></th>
                                        <th className="text-center"></th>
                                        <th className="text-center"></th>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Email</td>
                                            <td>test@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>(408)554-5356</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>El Camino Real, Santa Clara, CA</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
