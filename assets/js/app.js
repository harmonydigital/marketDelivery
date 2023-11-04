const app = document.getElementById('app')

app.innerHTML=`

    <div class='hearder'>
        <h1>
            Flex Delivery
        </h1>
    </div>


    <div >

        <div>
            <h3>Aplicativos</h3>
        </div>



        <div class='appGalery'>

            <a targt='_blank' href='https://harmonydigital.github.io/xarapp/'>
                <img src='assets/img/bebidas.png'>
                <span>Bebidas Delivery</span>
            </a>

            <a href='https://harmonydigital.github.io/queropizza/' targt='_blank'>
                <img src='assets/img/pizzas.png'>
                <span>Pizzas Delivery</span>
            </a>

            <a href='https://harmonydigital.github.io/beachbar/' targt='_blank'>
                <img src='assets/img/camarao.png'>
                <span>Praia Delivery</span>
            </a>
        </div>

    </div>

    <div style="
    display: flex;
">
    
        <a href='https://harmonydigital.github.io/admbeach/' targt='_blank'>
            <img src='assets/img/admflow.png'>
            <span>Flow adm </span>
        </a>
    </div>



    <footer>
        <a href='https://www.instagram.com/harmonydigitalflow/' barget='_blank'>
            @harmonydigitalflow
        </a>
    </footer>

` 