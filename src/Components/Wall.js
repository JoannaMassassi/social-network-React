import React from 'react';
import fire from '../Firebase/Firebase';
import { Component } from 'react';



 class Wall extends Component {


  render(){
    return (
      <div>
      <nav>
        <p id='saludo'></p>
        <button>Perfil</button>
        <button onClick={() => fire.auth().signOut()}>Log Out</button>
      
        </nav>
        <section id='wall'>
        <form id='submit-post'>
        <textarea className='post-area' name='comment' placeholder='escribe aqui' required></textarea>
        <button id='publish'>publicar</button>
        </form>
        <div id='post-list'>
        </div>
        </section>
        </div>

    
    );
  }
}

export default Wall;
