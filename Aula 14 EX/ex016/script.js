function contador() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1!')
            p = 1
        }
        if (i < f) {
            //Ordem Crescente
            for (let a = i; a <= f; a += p) {
                res.innerHTML += ` ${a} 👉 `;
            }
        }
        else {
            //Ordem Decrescente
            for (let a = i; a >= f; a -= p) {
                res.innerHTML += ` ${a} 👉 `;
            }
        }
        res.innerHTML += ` 🏁 `
    }
}