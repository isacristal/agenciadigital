import iniciocss from './Inicio.module.css'
function Inicio() {
    return (
        <div>
            {/*HEADER*/}
            <div class={iniciocss.div}>
                <img src="/img/logo%20(2).png"/>

                <nav className={iniciocss.nav}>
                    <a class={iniciocss.nave} href="#servico" >SERVIÇOS</a>
                    <a class={iniciocss.nave} href="#estudo">ESTUDOS DE CASO</a>
                    <a class={iniciocss.nave} href="#ebooks">EBOOKS</a>
                    <a class={iniciocss.orca} href="#solicitar">PEDIR ORÇAMENTO</a>
                </nav>

            </div>

            {/*BANNER*/}
            <div class={iniciocss.divinha}>
                <img src="/img/marca.PNG"/>
            </div>

            {/*SERVIÇOS*/}
            <div id="servico">
                <h3>SERVIÇOS DE MARKENTIG</h3>

                <div class={iniciocss.divona}>
                    {/*1*/}
                    <div class={iniciocss.borda}>
                        <p>SEO</p>

                        <p>Melhore a visibilidade do seu site nos mecanismos de busca.</p>

                        <button class={iniciocss.batom}>SAIBA MAIS</button>
                    </div>
                    {/*2*/}
                    <div class={iniciocss.borda}>
                        <p>MÍDIA SOCIAL</p>

                        <p>Construa e gerencie uma presença forte nas redes sociais.</p>

                        <button class={iniciocss.batom}>SAIBA MAIS</button>
                    </div>
                    {/*3*/}
                    <div class={iniciocss.borda}>
                        <p>PUBLICIDADE SOCIAL</p>

                        <p>Crie campanhas de anúncios eficazes para atrair clientes.</p>

                        <button class={iniciocss.batom}>SAIBA MAIS</button>
                    </div>
                </div>

                {/*ESTUDOS*/}
                <div id="estudo" class={iniciocss.pdivonaco}>
                    <h3>ESTUDOS DE CASO</h3>
                    <div class={iniciocss.divonaco}>
                        {/*1*/}
                        <div class={iniciocss.borda}>
                            <p>CAMPANHA para a ABCorp</p>

                            <p>Este estudo de caso destaca como nossa equipe aumentou o tráfego do site em 50% por meio de uma estratégia de SEO bem-sucedida.</p>

                            <button class={iniciocss.batom}>SAIBA MAIS</button>
                        </div>
                        {/*2*/}
                        <div class={iniciocss.borda}>
                            <p>CAMPANHA para a Korpore</p>

                            <p>Neste estudo de caso, saiba como nossa abordagem de mídia social aumentou as interações em 60% e gerou mais leads qualificados.</p>

                            <button class={iniciocss.batom}>SAIBA MAIS</button>
                        </div>
                        {/*3*/}
                        <div class={iniciocss.borda}>
                            <p>CAMPANHA para a DEpris</p>

                            <p>Neste estudo de caso, mostramos como nossas estratégias de publicidade aumentaram as conversões em 75% em apenas três meses.</p>

                            <button class={iniciocss.batom}>SAIBA MAIS</button>
                        </div>
                    </div>
                </div>

                {/*EBOOKS*/}
                <div id="ebooks">
                    <h3>EBOOKS GRATUITOS</h3>

                    <div class={iniciocss.divonassa}>
                        {/*1*/}
                        <div class={iniciocss.borda}>
                            <p>Guia Completo de SEO</p>

                            <p>Aprenda as melhores práticas de SEO para impulsionar o seu site aos primeiros resultados dos mecanismos de busca. Este ebook abrange desde a pesquisa de palavras-chave até a otimização.</p>

                            <button class={iniciocss.batom}>SAIBA MAIS</button>
                        </div>
                        {/*2*/}
                        <div class={iniciocss.borda}>
                            <p>Domine as Redes Sociais</p>

                            <p>Descubra como construir uma estratégia eficaz de mídia social para aumentar o engajamento com seu público, criar conexões significativas e aumentar sua presença nas redes sociais.</p>

                            <button class={iniciocss.batom}>SAIBA MAIS</button>
                        </div>
                        {/*3*/}
                        <div class={iniciocss.borda}>
                            <p>Funil de Vendas</p>

                            <p>Saiba como otimizar seu funil de vendas para aumentar as conversões. Este ebook explora estratégias e probabilidades para atrair leads, nutri-los e convertê-los em clientes satisfeitos e felizes.</p>

                            <button class={iniciocss.batom}>SAIBA MAIS</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*SOLICITAR*/}
            <div id="solicitar" class={iniciocss.solicitar}>
                <h2>SOLICITAR ORÇAMENTO</h2>
                <p>Preencha o formulário abaixo e entraremos em contato com você em breve.</p>

                <div class={iniciocss.grid}>
                    <div class={iniciocss.form}>
                        <form action="">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" name="nome" id="nome" placeholder="Seu nome" required/>

                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name="email" id="email" placeholder="Seu e-mail" required/>

                            <label htmlFor="tel">Telefone:</label>
                            <input type="tel" name="tel" id="tel" placeholder="Seu telefone" required/>

                            <label htmlFor="mensagem">Escreva uma mensagem:</label>
                            <input type="text" name="mensagem" id="mensagem" placeholder="Escreva..." required/>

                        </form>
                        <button class={iniciocss.btn} type="submit">Enviar solicitação</button>

                    </div>
                    <div>
                        <img src="/img/cifrao.png"/>
                    </div>

                </div>


            </div>

            {/*FOOTER*/}
            <div class={iniciocss.fotter}>
                <img src="/img/logo2222.PNG"/>
                <p>© 2023 Agência Digital. Todos os direitos reservados.</p>

            </div>

        </div>



    );
}

export default Inicio;
