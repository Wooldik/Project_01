import styled from 'styled-components'
// import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'


const Book = (props) => {

	return (
		<S.Book>
			<S.Img src={props.book} />
			<S.Button src={props.download}>
				<Link href={props.download}>Скачать </Link>
			</S.Button>

		</S.Book>

	)

}

const S = {
	Book: styled.div`
	
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	/* border: 1px solid #2d2d2d; */

	border-radius: 10px;
	/* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2); */
	/* flex-basis: 300px; */
	margin: 40px;
	/* padding-bottom: 50px; */
	text-align: center;
	/* max-height: 350px; */
	flex-wrap:wrap;
	justify-content:space-around
	
`,
	Img: styled.img`
		/* height:100%; */
		width:100%;
		border-radius:10px 10px 0 0 ;
	`,
	Button: styled.button`
		display: flex;
		width:100%;
		/* padding:5px; */
		border-radius: 0  0 10px 10px;
		cursor: pointer;
		padding:0;
		& a{
			color: #fff;
			text-decoration: none;
			height: 100%;
			width: 100%;
			background-color:rgb(0, 146, 255);
			border-radius: 0  0 10px 10px;
			padding:10px;
			
			
			}
			& a:hover {
				transition: all .8s ease;
				background-color: #fff;
				color:#001529;
			}
	`

}

export default Book;