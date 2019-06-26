import React from 'react';
import { Component } from 'react';
import fire from '../Firebase/Firebase';
import Button from 'react-bootstrap/Button';


class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      feel: '',
      post: '',
      list: [],
      keys: [],
      show: false
    };
  }

  logout(event) {
    fire.auth().signOut();
    this.setState({ loading: true });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  new = e => {
    this.setState({ loading: true });
    e.preventDefault();
    let feel = this.state.feel;
    let post = this.state.post;
    const { currentUser } = fire.auth();
    fire
      .database()
      .ref(`wall/`)
      .push({ feel, post, user: currentUser.email })
      .then(() => {
        this.setState({ loading: false });
      });
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    fire
      .database()
      .ref(`/wall/`)
      .on('value', snapshot => {
        var obj = snapshot.val();
        var list = [];
        var keys = [];
        for (let a in obj) {
          list.push(obj[a]);
          keys.push(a);
        }
        this.setState({
          list: list,
          keys: keys,
          loading: false
        });
      });
  };



render(){
  
  const listItems = this.state.list.map((item) => (
    <span>
        <p>{item.user} dice:</p>
        <p>{item.feel}</p>
        <p>{item.post}</p>
        <button>Borrar</button>
        <button>Editar</button>
      </span>
  ));


  return (
    
    <div className="wallWindow">
       <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="/" onClick={this.logout}>Cerrar Sesión</a>
        </li>
      </ul>
    
      <div className="contentWall">
        <input value={this.state.title} onChange={this.handleChange} name="feel"
          className="form-control mb-2" placeholder="¿Cómo te sientes hoy?" required />
      
        <textarea row="9" value={this.state.description} onChange={this.handleChange} name="post" 
          className="form-control mb-2" placeholder="¿Qué tienes para contar?" required />
              
        <Button color="dark" onClick={this.new} className="mb-5">Publicar</Button>

          {this.state.loading ? <h6 className="mb-5">Loading ...</h6> : null}
            <span className="mb-5">{listItems}</span>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
    </div>

  );
}
}

export default Wall;
