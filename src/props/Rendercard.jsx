export default function RenderCard(props) {


    // const elemento = props.item

    const imgcard = props.img
    const nomecard = props.nome
    const valueprezzo = props.prezzo


    return (<div className="card" >
        <img className="card-img" src={imgcard} alt={nomecard} />
        <div className="card-content">
            <h3 className="card-title-prezzo">{nomecard}</h3>
            <p className="card-title-prezzo">{valueprezzo}</p>
        </div>
    </div>)

}