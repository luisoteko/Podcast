export default class extends React.Component {
  render() {
    return (
      <div>
        <h1>Hola Platzi!</h1>
        <p>Bienvenidos al curso de Next!</p>
        <img src="/static/platzi-logo.png" alt="Platzi"/>
            <style jsx>{`
                h1{
                    color: red;
                }
                p{
                  color: green;
                }
                :global (div p){
                  color: green;
                }
                img{
                  max-width: 50%;
                  display: block;
                  margin: 0 auto;
                }
            `}
        </style>
      </div>
    )
  }
}
