import React from 'react';
import "./../assets/css/home.css"
import ListaFilmesAPI from './../components/ListaFilmesAPI/ListaFilmesAPI';

function Home() {
    return (
        <main className='main-home'>
            <ListaFilmesAPI />
        </main>
    )
}
export default Home;