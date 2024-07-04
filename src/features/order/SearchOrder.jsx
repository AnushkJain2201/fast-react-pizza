import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
	const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the API to search for the order and set the result in the state or update the existing order state
        if(!query) return;
        navigate(`/order/${query}`);
        setQuery("");
    }
	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder='Search Order #'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			></input>
		</form>
	);
};

export default SearchOrder;
