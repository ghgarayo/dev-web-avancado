import React from 'react';
import "./../assets/css/home.css"

import Title from '../components/Title';
import Card from '../components/Card/index';

function Home() {
    return (
        <main className='main-home'>
            <Title 
                title="Filmes em destaque" 
                text="Veja opções abaixo:" 
            />
            <Card />
        </main>
    )
}
export default Home;