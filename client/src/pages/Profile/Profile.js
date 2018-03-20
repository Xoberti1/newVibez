import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './Profile.css'

class Profile extends Component {
    render() {
        return (
            <div class="container body-content">
            <div class="user_header">
              <div class="wrapper header_buffer">
                <div class="nav_container">
                  <span class="logo">
                    vibez
                  </span>
                </div>
                <div class="nav_container search_float">
                  <span class="search_nav">
                    <div class="search_nav_block">
                      <input type="text" class="search_bar form-control" placeholder="Search"/>
                      <Link to="/signin"> <span class="top_nav_option"><a href="#">Sign In</a></span> </Link>
                      <Link to="/register"> <span class="top_nav_option"><a class="sign_up" href="#">Sign Up</a></span> </Link>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div class="row main_content">
              <div class="col-xs-3 user_info main_col">
                <div class="user_name">John Doe</div>
                <div class="user_subtitle">Cool dude </div>
                <a href="#">
                  <div class="follow_me">Follow me!</div>
                </a><br/>
                <span class="divider"></span>
                <div class="user_stat">SOCIAL</div>
                <div class="social_icon">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </div>
                <span class="divider"></span>
                <div class="user_stat">FOLLOWING</div>
                <div class="stats">2</div>
                <span class="divider"></span>
                <div class="user_stat">FOLLOWERS</div>
                <div class="stats">4</div>
                <span class="divider"></span>
                <div class="user_stat">POSTS</div>
                <div class="stats">2</div>
              </div>
              <div class="col-xs-9 main_col">
      
          
      
              </div>
            </div>
          </div>
            
        )
    }
}
export default Profile;