import * as React from "react";

import { Button, Menu } from "@mui/material";

import { FilterMenuProps } from "../../types/team/filterMenuProps";

const FilterMenu = (props: FilterMenuProps) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Button
				id="chip-filter-menu-button"
				aria-controls={open ? "chip-filter-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				Filters
			</Button>
			<Menu id="chip-filter-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
				{props.elements}
			</Menu>
		</>
	);
};

export default FilterMenu;
