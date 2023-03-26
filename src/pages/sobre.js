import React from 'react';
import Server from './../assets/images/server.svg';
import "./../assets/css/aboutus.css"
function Sobre() {
    
    return (
        <div className='about-us'>            
            <img src={Server} alt='Logo da Stream Server'/>
            <p className='description'>O Stream Server é o destino perfeito para todos os amantes de entretenimento. Oferecemos uma ampla variedade de filmes e seriados, desde clássicos atemporais até os mais recentes lançamentos. Além disso, temos uma vasta seleção de campeonatos de futebol e NFL para os fãs do esporte. Com uma interface fácil de usar, você pode acessar todo o nosso conteúdo de qualquer dispositivo, a qualquer momento. Junte-se à nossa comunidade de usuários e comece a explorar tudo o que o Stream Server tem a oferecer!</p>
        </div>
    )
}

export default Sobre;