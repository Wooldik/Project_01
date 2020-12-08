import styled from 'styled-components';

const Card = (props) => {

	return (<>
		<S.Card>
			<div>
				<S.Img src={props.photo} />
			</div>
			<div>
				<span>{props.lastName}</span>
			</div>
			<div>
				<span>{props.firstName}</span>
			</div>
			<div>
				<span><a href='tel:+375291051916'>{props.phone}</a></span>
			</div>
			<div>
				<span>{props.position}</span>
			</div>
		</S.Card>
	</>)
}

const S = {
	Card: styled.div`
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid #2d2d2d;
  border-radius: 10%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  flex-basis: 330px;
  margin: 10px;
  padding: 10px;
  text-align:center;
  max-height:325px;
	`,
	Img: styled.img`
	 border-radius: 10%;
	 
	`,

}
export default Card