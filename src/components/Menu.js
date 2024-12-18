import { Alert, AlertIcon, AlertTitle, Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, IconButton, Select, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { useExams } from "../context/useExams";

function Menu() {

	const { isOpen, onOpen, onClose } = useDisclosure();

	const [opacity, setOpacity] = useState(0);

	const {exams, examToStalk, updateExamToStalk } = useExams();

	return (
		<>
		<IconButton
			position='fixed'
			margin='2vh'
			right='0' top='0'
			onMouseEnter={()=>setOpacity(1)} onMouseLeave={()=>setOpacity(0)}
			onClick={onOpen}
			transition='0.2s'
			zIndex={1000}
			opacity={opacity}
		>
	 		<FaBars />
		</IconButton>
		<Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>ExamStalker Settings</DrawerHeader>

          <DrawerBody gap='2vh' display='flex' flexDir='column'>

			{ exams.length > 0 ?
				<FormControl isRequired>
					<FormLabel>Exam to stalk</FormLabel>
					<Select value={examToStalk} onChange={(e) => updateExamToStalk(e.target.value)}>
						{exams.map((exam) => (
							<option key={exam.id} value={exam.id}>{exam.name}</option>
						))}
					</Select>
				</FormControl>
			:
			<Alert status='error'>
				<AlertIcon />
				<AlertTitle>Invalid api Url</AlertTitle>
			</Alert>
			}
          </DrawerBody>

          <DrawerFooter>
            <Button isDisabled={exams.length === 0} variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
	</>
	);
}

export default Menu;