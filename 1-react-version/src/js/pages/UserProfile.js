import React from "react";

export default class UserProfiles extends React.Component {
  render() {
    return (
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-8">
                <div class="card">
                  <div class="header">
                    <h4 class="title">Edit Profile</h4>
                  </div>
                  <div class="content">
                    <form method="post" action="/user">
                      <input type="hidden" name="_id" value="{{user._id}}"/>
                        <div class="row">
                          <div class="col-md-4">
                            <div class="form-group">
                              <label>Username</label>
                              <input type="text" class="form-control" disabled placeholder="{{user.username}}" name="username"/>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <label>Password</label>
                              <input type="text" class="form-control" disabled placeholder="************" value=""/>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" class="form-control" placeholder="{{user.email}}" name="email"/>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label>Mirror ID</label>
                              <input type="text" class="form-control" placeholder="{{user.mirrorID}}" name="mirrorID"/>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>First Name</label>
                              <input type="text" class="form-control" placeholder="{{user.firstname}}" name="firstname"/>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Last Name</label>
                              <input type="text" class="form-control" placeholder="{{user.lastname}}" name="lastname"/>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label>Address</label>
                              <input type="text" class="form-control" placeholder="{{user.maps_origin_street_address}}" name="maps_origin_street_address"/>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-4">
                            <div class="form-group">
                              <label>City</label>
                              <input type="text" class="form-control" placeholder="{{user.maps_origin_city_address}}" name="maps_origin_city_address"/>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <label>Country</label>
                              <input type="text" class="form-control" placeholder="{{user.maps_origin_state_address}}" name="maps_origin_state_address"/>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <label>Postal Code</label>
                              <input type="number" class="form-control" placeholder="{{user.maps_origin_zipcode_address}}" name="maps_origin_zipcode_address"/>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label>About Me</label>
                              <textarea rows="5" class="form-control" placeholder="Here can be your description" value=""></textarea>
                            </div>
                          </div>
                        </div>

                        <button type="submit" class="btn btn-info btn-fill pull-right">Update Profile</button>
                        <div class="clearfix"></div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-user">
                  <div class="image">
                    <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..."/>
                  </div>
                  <div class="content">
                    <div class="author">
                      <a href="#">
                        <img class="avatar border-gray" src="assets/img/faces/face-0.jpg" alt="..."/>

                        <h4 class="title">Thomas Nguyen<br />
                          <small>michael24</small>
                        </h4>
                      </a>
                    </div>
                    <p class="description text-center"> "Lamborghini Mercy
                      Your chick she so thirsty
                      I'm in that two seat Lambo"
                    </p>
                  </div>
                    <div class="text-center">
                      <button href="#" class="btn btn-simple"><i class="fa fa-facebook-square"></i></button>
                      <button href="#" class="btn btn-simple"><i class="fa fa-twitter"></i></button>
                      <button href="#" class="btn btn-simple"><i class="fa fa-google-plus-square"></i></button>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    );
  }
}
