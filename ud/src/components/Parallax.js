import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import M from 'materialize-css';
 
class Bg extends Component {
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
        <h2 class="white-text">#BeInDemand</h2>
        <h6>Acquire new skills, and get noticed by everyone.</h6>
        <form class="white">
        <div class="input-field">
          <input id="search" type="search" placeholder="What do you want to learn?" />
          <i class="material-icons">search</i>
        </div>
      </form>
      </div>
    </div>
  </div>
  
  <div class="parallax">
    <img src="https://digitalmarketingstrategysr.com/wp-content/uploads/2018/12/portfolio-background.jpg" />
  </div>

</div>
        ) ;
    }
}
export default Bg;