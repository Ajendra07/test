import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import M from 'materialize-css';
 
class Recc extends Component {
    componentDidMount() {
      let elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems, {inDuration: 300, outDuration: 225});
  }
    
    render() {
        return (
      <div class="parallax-container center valign-wrapper">
  <div class="container">
    <div class="row">
      <div class="col s12 white-text">
        <h4 class="white-text">Get Personalized Recommendattions</h4>
        <h6>Answer few questions</h6>
          <a class="waves-effect waves-light btn-large red">Start</a>
      </div>
    </div>
  </div>
  
  <div class="parallax">
    <img src="http://xboxportugal.com/wp-content/uploads/2018/08/3d-parallax-wallpaper-anime-aphone-5s-hd-wallpaper-parallax.jpg" />
  </div>

</div>
        ) ;
    }
}
export default Recc;