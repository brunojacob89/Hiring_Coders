type User = {
    name: String,
    lastName: String,
    birthday: string,
    age?:number

}

const Bruno:User = {
    name:"Bruno",
    lastName:"Jacob",
    birthday:"08/12/1989",
    
}

//Union Types
// | (Como se fosse ||)

type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message: String , level: LogLevel){
    console.log('[${level}] - ${message} ')
}

logMessage('Uma mensagem info', 'info')
logMessage('Uma mensagem info', 'error')
logMessage('Uma mensagem info', 'debug')

// Intersction &

type About = {
    bio: String,
    interests: string[]
}

type Profile = User & About;

const userWithProfile: Profile = {

    name: 'Bruno',
    lastName: 'Jacob',
    birthday: '08/12/1989',
    bio: 'Hello, my name is Bruno Jacob',
    interests: ['gatos', 'cachorros', 'jogos', 'tecnologia']
}

type ComposedProfile = User & {
    log : LogLevel,
}