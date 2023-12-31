function calcularIMC() {
    const peso = $('#peso')
    const altura = $('#altura')
    const imc = peso.val() / (altura.val() ** 2)
    console.log()
    if (peso.val() && altura.val()) {
        const resultado = $('#resultado')
        resultado.text("Meu IMC é de" + imc.toFixed(2));
        console.log()
        const descricao = $('#descricao')
        if (imc < 17) {
            descricao.text("Muito abaixo do peso")
            descricao.addClass("text-danger")
        } else if (imc > 17 && imc <= 18.49) {
            descricao.text("Abaixo do peso")
            descricao.addClass("text-danger")
        } else if (imc > 18.50 && imc <= 24.99) {
            descricao.text("Peso Normal")
            descricao.addClass("text-primary")
        } else if (imc > 25 && imc <= 29.99) {
            descricao.text("Acima do peso")
            descricao.addClass("text-danger")
        } else if (imc > 30 && imc <= 34.99) {
            descricao.text("Obesidade 1")
            descricao.addClass("text-danger")
        } else if (imc > 35 && imc <= 39.99) {
            descricao.text("Obesidade 2 (Severa)")
            descricao.addClass("text-danger")
        } else {
            descricao.text("Obesidade 3 (Morbita)")
            descricao.addClass("text-danger")
        }
    } else {
        const mensagemDeErro = $("#mensagemDeErro")
        mensagemDeErro.text("não foi possivel calcular seu IMC")

        const resultado = $('#resultado');
        resultado.text("")

        const altura = $('#altura')
        const peso = $('#peso')

        if (!altura.val()) {
            altura.addClass("is-invalid")
        } else {
            altura.addClass("is-invalid")
        }

        if (!peso.val()) {
            peso.addClass("is-invalid")
        } else {
            peso.addClass("is-invalid")
        }

    }
}

function limpar() {
    const peso = $('#peso')
    const altura = $('#altura')

    peso.val("")
    altura.val("")

    peso.removeClass("is-valid is-invalid")
    altura.removeClass("is-valid is-invalid")

    const resultado = $('#resultado');
    resultado.text("")

    const descricao = $('#descricao');
    descricao.text("")

    const mensagemDeErro = $('#mensagemDeErro');
    mensagemDeErro.text("")

}

const altura = $('#altura')
const peso = $('#peso')
console.log(peso)
peso.on('input', function () {
    if (peso.val().length > 0) {
        peso.removeClass("is-invalid")
        peso.addClass("is-valid")
    } else {
        peso.removeClass("is-valid")
    }
})

altura.on('input', function () {
    if (altura.val().length > 0) {
        altura.removeClass("is-invalid")
        altura.addClass("is-valid")
    } else {
        altura.removeClass("is-valid")
    }
})