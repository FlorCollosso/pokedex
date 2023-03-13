import { useParams } from "react-router-dom";

const Pokemon = () => {
    const {name} = useParams();
    return <div>{name}</div>
};

export default Pokemon;