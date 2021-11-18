import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('name', {path: "/"});
        cookies.remove('lastname', {path: "/"});
        cookies.remove('email', {path: "/"});
        cookies.remove('age', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render() {
        console.log('name: '+ cookies.get('name'));
        console.log('lastname: '+cookies.get('lastname'));
        console.log('email: '+cookies.get('email'));
        console.log('age: '+cookies.get('age'));
        console.log('username: '+cookies.get('username'));
        return (
            <div>
                Menu Principal

                <br />
                <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
            </div>
        );
    }
}

export default Menu;