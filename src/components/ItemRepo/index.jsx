import { ItemContainer } from "./styles";

function ItemRepo(props) {
  return (
    <ItemContainer>
      <h3>{props.name}</h3>
      <p>{props.full_name}</p>
      <a href={props.html_url} rel="noreferrer" target="_blank">
        Ver repositório
      </a>
      <br />
      <a
        className="remover"
        href={"#"}
        onClick={() => props.onRemove(props.id)}
      >
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
