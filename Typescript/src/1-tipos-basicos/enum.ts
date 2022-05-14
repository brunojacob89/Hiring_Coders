enum Permissoes{
    admin,
    editor,
    comum
}

const usuario = {
    nivel: Permissoes.comum
}

console.log(usuario)

enum Permissoes2{
    admin = 'ADMIN',
    editor = 'EDITOR',
    comum = 'COMUM'
}

enum Cores {
    red = `#ff0000`,
    black = '#000'
}


const usuario2 = {
    perfil: Cores.black,
    nivel: Permissoes2.comum
}

console.log(usuario2)

