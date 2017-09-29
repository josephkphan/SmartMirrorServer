import React from "react";

export default class ApiKeys extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="header">
                                    <h4 className="title">Api Keys</h4>
                                </div>
                                <div className="content">
                                    <form method="post" action="/apikeys">
                                        <input type="hidden" name="_id" value="{{user._id}}"/>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Weather Key</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="{{user.dark_sky_weather_key}}"
                                                           name="dark_sky_weather_key"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Google Geocode Key</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="{{user.google_geocode_key}}"
                                                           name="google_geocode_key"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Google Distance Matrix Key</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="{{user.google_distance_matrix_key}}"
                                                           name="google_distance_matrix_key"/>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-info btn-fill pull-right">Update Keys
                                        </button>
                                        <div className="clearfix"></div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
