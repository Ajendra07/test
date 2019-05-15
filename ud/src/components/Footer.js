import React, { Component } from 'react' ;

class Footer extends Component {
    render() {
        return (
            <footer class="page-footer black">
          <div class="container black-text">
            <div class="row">
              <div class="col l6 s12">
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">About Us</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Careers</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Blogs</a></li>
                </ul>
            </div>
              <div class="col l4 offset-l2 s12">
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Topics</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Support</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Affiliate</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">Back To Top ^</a>
            </div>
          </div>
        </footer>
        ) ;
    }
}

export default Footer ;