import { React, Component } from "react";
import './MainContent.css';

import img1 from '../static/img/socks_blue.jpg';
import img2 from '../static/img/socks_green.jpg';

import Buttons from './Buttons';


   
class MainContent extends Component{
    constructor(props){
        super(props)

        this.state = {
            atualizado: img1,
            quantidade: 0        }    
    }

controle1 = () => this.setState({atualizado: img1});

controle2 = () =>  this.setState({atualizado: img2});

adicionarItens = () => {
    let contador = this.state.quantidade;
     console.log(contador)
     contador ++;
     console.log(contador)
     this.setState({quantidade : contador});
}

removeItens = () => {
    let contador = this.state.quantidade;
     console.log(contador)
     if(contador > 0){
        contador --;
     }
     this.setState({quantidade : contador});
}  
   
    render(){
        return (
            <article>
                <section id="imagem">
                    <figure>
                        <img src={ this.state.atualizado } alt='meia'></img>
                        <figcaption>SOCKS</figcaption>
                    </figure>

                    <div id="select_color">
                        <p>Colors</p>
                        <button id="blue_socks" onClick={ this.controle1 }></button>
                        <button id="green_socks" onClick={ this.controle2 }></button>
                    </div>
                </section>
                
                <section id="content">
                        <section>
                            <div className="principal">
                                <p>In Stock</p>
                                <p>Shipping: Free</p>
                            </div>
                            <div className="subprincipal">
                                <p>50% cotton</p>
                                <p>30% wool</p>
                                <p>20% polyester</p>
                            </div>
                        </section>
                        <section id="btn1">
                            <Buttons onClick={ this.adicionarItens }>Add to card!</Buttons>
                        </section>
                        <section className="add_card">
                            Add card: { this.state.quantidade } item(ns)!
                        </section>
                        <section id="btn2">
                            <button className="remove_card" onClick={ this.removeItens }>remove to card!</button>
                        </section>
                </section>
            </article>
        )
    }
}
export default MainContent;