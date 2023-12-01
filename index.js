function mostrarSenha() {
    var verSenha = document.getElementById('password');
    var iconeolho = document.getElementById('icone-olho');
    if (verSenha.type === 'password') {
        verSenha.type = 'text'
        iconeolho.innerHTML = '👀'

    } else {
        verSenha.type = 'password';
        iconeolho.innerHTML = '👁️';
    };

};

