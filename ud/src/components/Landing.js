import React, {Component} from 'react' ;
import M from 'materialize-css' ;

class Landing extends Component {
    state = {
        courses: [],
        designs: [],
        musics: []
    }
    
    componentDidMount() {
        this.getCourses() ;
        this.getDesigns() ;
        this.getMusics() ;
        let elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {inDuration: 300, outDuration: 225});
    }

    getCourses = _ => {
        fetch('http://localhost:4000/')
        .then(response => response.json())
        .then(response => this.setState({ courses: response.data }))
        .catch(err => console.log(err))
    }
    
    getDesigns = _ => {
        fetch('http://localhost:4000/design')
        .then(response => response.json())
        .then(response => this.setState({ designs: response.data }))
        .catch(err => console.log(err))
    }
    
     getMusics = _ => {
        fetch('http://localhost:4000/music')
        .then(response => response.json())
        .then(response => this.setState({ musics: response.data }))
        .catch(err => console.log(err))
    }

    renderCourse = ({category_id, name, author, rating, price, imgl}) =><div class="collapsible-body"><div class="row">
    <div class="col s5 m2">
      <div class="card">
        <div class="card-image">
          <img src={imgl} />
          <span class="card-title" key={category_id}>{name}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content" key={category_id}>
          <b>Author: {author}</b> <br />
            <b>Rating : {rating} </b> <br />
                <b> Price : {price} </b>
        </div>
      </div>
    </div>
  </div>
    </div>

    renderDesign = ({category_id, name, author, rating, price, imgl}) =><div class="collapsible-body"><div class="row">
    <div class="col s5 m2">
      <div class="card">
        <div class="card-image">
          <img src={imgl} />
          <span class="card-title" key={category_id}>{name}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content" key={category_id}>
          <b>Author: {author}</b> <br />
            <b>Rating : {rating} </b> <br />
                <b> Price : {price} </b>
        </div>
      </div>
    </div>
  </div>
    </div>

    renderMusic = ({category_id, name, author, rating, price, imgl}) =><div class="collapsible-body"><div class="row">
    <div class="col s5 m2">
      <div class="card">
        <div class="card-image">
          <img src={imgl} />
          <span class="card-title" key={category_id}>{name}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content" key={category_id}>
          <b>Author: {author}</b> <br />
            <b>Rating : {rating} </b> <br />
                <b> Price : {price} </b>
        </div>
      </div>
    </div>
  </div>
    </div>
    render() {
        const { courses } = this.state ;
        const { designs } = this.state ;
        const { musics } = this.state ;
        return (
            <div className="App">
            <ul class="collapsible">
             <li>
    <div class="collapsible-header">
      <i class="material-icons">code</i>
      Coding</div>
               {courses.map(this.renderCourse)}
            </li>
            <li>
            <div class="collapsible-header">
            <i class="material-icons">create</i>
            Design</div>
                {designs.map(this.renderDesign)}
            </li>
            <li>
            <div class="collapsible-header">
            <i class="material-icons">music_note</i>
            Music</div>
                {musics.map(this.renderMusic)}
            </li>
            </ul>
            </div>
        ) ;
    }
}

export default Landing ;