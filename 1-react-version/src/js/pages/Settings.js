import React from "react";

export default class Settings extends React.Component {
  render() {
    return (
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="header">
                    <h4 className="title">Edit Profile</h4>
                  </div>
                  <div className="content">
                    <form method="post" action="/settings">
                      <input type="hidden" name="_id" value="{{user._id}}"/>

                        <label>Google Maps Settings</label>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Avoid Tolls</label>
                              <select name="maps_settings_avoid_tolls">
                                <option value="" disabled selected>Update</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Transit Mode</label>
                              <select name="maps_settings_transit_mode">
                                <option value="" disabled selected>Update</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Mode Mode</label>
                              <select name="maps_settings_mode">
                                <option value="" disabled selected>Update</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <label>Mirror Settings</label>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Font Size</label>
                              <select name="fontSize">
                                <option value="" disabled selected>Update</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Font Color</label>
                              <select name="color">
                                <option value="" disabled selected>Update</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>
                          </div>
                        </div>


                        <button type="submit" className="btn btn-info btn-fill pull-right">Update Settings</button>
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
