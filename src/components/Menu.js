import { Box, IconButton, MenuContent, MenuRadioItem, MenuRadioItemGroup, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

function Menu() {

	const [opacity, setOpacity] = useState(0);

	return (
		<Box
			pos='absolute'
			right='0' top='0'
			padding='2vh'
			onMouseEnter={()=>setOpacity(1)} onMouseLeave={()=>setOpacity(0)}
			transition='0.2s'
			zIndex='1000'
			opacity={opacity}
		>
			<MenuRoot positioning={{ placement: "left" }}>
				<MenuTrigger asChild>
					<IconButton colorPalette='red'>
						<FaBars />
					</IconButton>
				</MenuTrigger>
				<MenuContent minW="10rem">
					<MenuRadioItemGroup
					//   value={value}
					//   onValueChange={(e) => setValue(e.value)}
					>
					<MenuRadioItem value="asc">Ascending</MenuRadioItem>
					<MenuRadioItem value="desc">Descending</MenuRadioItem>
					</MenuRadioItemGroup>
				</MenuContent>
			</MenuRoot>
	  	</Box>
	);
}

export default Menu;