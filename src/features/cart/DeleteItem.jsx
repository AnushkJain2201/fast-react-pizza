/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./CartSlice";

const DeleteItem = ({pizzaId}) => {
    const dispatch = useDispatch();

	return <div>
        <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>Delete</Button>
    </div>;
};

export default DeleteItem;
