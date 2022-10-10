import Sink from "./Sink";
import Oven from "./Oven";

const Kitchen = (props) => {
  return (
    <div>
      <h1>Kitchen</h1>
      < Oven />
      < Sink />
    </div>
  )
}

export default Kitchen;