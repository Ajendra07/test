import React, { Component } from 'react' ;
import M from 'materialize-css' ;

class Header extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
    }
    
    render() {
        return (
            <div>
            <ul id="dropdown1" class="dropdown-content">
                <li><a href="#!">Coding<i class="material-icons">code</i></a></li>
                <li><a href="#!">Design<i class="material-icons">create</i></a></li>
                <li><a href="#!">Music<i class="material-icons">music_note</i></a></li>
            </ul>
            <nav>
                <div class="nav-wrapper light-blue darken-1">
                <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Udemy</a>
                <ul class="right hide-on-med-and-down">
                <li><form>
        <div class="input-field">
          <input id="search" type="search" placeholder="Search Here..." />
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form></li>
                <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Categories<i class="material-icons left">view_module</i></a></li>
                <li><a href="sass.html">Udemy For Business</a></li>
                <li><a href="badges.html">Teach on Udemy</a></li>
                <li><a href="#!"><i class="material-icons">shopping_cart</i></a></li>
                <li><a class="waves-effect waves-light btn-small black">Log In</a></li>
                <li><a class="waves-effect waves-light btn-small red">Sign Up</a></li>
                </ul>
                </div>
            </nav>
            </div>
        ) ;
    }
}

export default Header ;