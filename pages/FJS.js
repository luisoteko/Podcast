export default class extends React.Component{
    render(){
        return(
            <div>
                <img src="/static/fundamentos-js.png" alt="Fundamentos JS"/>
                <h1>Curso de Fundamentos JavaScript</h1>
                <h2>Domina JavaScript, el lenguaje más versátil y demandado de la actualidad. Trabajarás en más de 20 proyectos para entender y construir con JavaScript desde cero.</h2>
                <style jsx>{`
                    h1, h2{
                        color: white
                    }
                    div{
                        max-width: 475px
                    }
                `}</style>
                <style jsx global>{`
                    body{
                        background: #1c3643
                    }        
                `}</style>
            </div>
        )
    }
}