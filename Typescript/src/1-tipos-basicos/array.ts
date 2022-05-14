const gatos: string[] = [
    `Lora`,
    `Logan`,
    `Lebeau`
]

// gatos.push(5); não funciona pois so aceita tipo string

function exibeGatos(gatos:String[]){
    return `Os Gatos são ${gatos.join(', ')}`
}

exibeGatos(gatos);