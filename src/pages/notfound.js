import alertSvg from "./../assets/images/alert.svg";
import "./../assets/css/notfound.css";

export default function NotFound(){

    return(
        <section className="page-not-found">
            <img src={alertSvg} alt="Página não encontrada! Por favor, verifique se o endereço digitado está correto!" />
            <h1 className="title-not-found">Página não encontrada! Por favor, verifique se o endereço digitado está correto!</h1>
        </section>


    )


}