import Card from "../Card/Card";
import { useSelector } from "react-redux";
import styled from "styled-components";


const Teachers = () => {
	const contacts = useSelector(store => store.contacts);


	console.log(contacts);
	return (<S.List  >
		{contacts.teachers.map((cardObj) => {
			return (<Card
				key={cardObj.id}
				photo={cardObj.photo}
				phone={cardObj.phone}
				firstName={cardObj.firstName}
				lastName={cardObj.lastName}
				position={cardObj.position}
			/>)
		})}
	</S.List>



	);
}

const S = {
	List: styled.div`
	  display: flex;
	  flex-wrap: wrap;
	  overflow: hidden;
	  justify-content:space-around;
  `
}

export default Teachers;
