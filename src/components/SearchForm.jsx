import React from "react";

const SearchForm = ({ searchedString, callbackSearch }) => {
	return (
		<>
			<input
				type="text"
				placeholder="Search food by name"
				value={searchedString}
                onChange={(e) => callbackSearch(e.target.value)}
                style={{width: "100%"}}
			/>
		</>
	);
};

export default SearchForm;
        