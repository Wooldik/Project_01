import { Row, Col, Layout, Menu } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';




const { Header, Footer, Sider, Content } = Layout

const App = ({ children }) => {


	return (<>


		<Layout >
			<Header style={{ maxHeight: '60px', background: "#0092ff" ,display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
			
				<Col span={6}>
					<NavLink to='/'>
						<S.LogoImg src='https://educentr-kudrovo.vsevobr.ru/images/gerb1.png' />
					</NavLink>
					{/* <h2>Государственное учреждение образования "Средняя школа № 12 г.Гомеля"</h2> */}
				</Col>
				<Col span={12}>
					<h4>ГУО "Средняя школа № 12 г.Гомеля"</h4>
				</Col>
				<Col span={6} >
					<NavLink to='/'>
						<S.LogoImg src='https://educentr-kudrovo.vsevobr.ru/images/gerb1.png' />
					</NavLink>
				</Col>
			</Header>
			<Layout style={{ display: 'flex', flexWrap: 'wrap' }}>

				<Sider>
					<S.Sitebar>
						<ul>
							<li><NavLink to='/administration'>Администрация</NavLink></li>
							<li><NavLink to='/teachers'>Учителя</NavLink></li>
							<li><NavLink to='/administration'>Однокласники</NavLink></li>
							<li><NavLink to='/administration'>Пладные услуги</NavLink></li>
							<li><NavLink to='/administration'>Факультативы</NavLink></li>
							<li><NavLink to='/administration'>Мероприятия</NavLink></li>
							<li><NavLink to='/library'>Библиотека</NavLink></li>
							<li><NavLink to='/about'>О нас</NavLink></li>
						</ul>
					</S.Sitebar>
				</Sider>



				<Content style={{ display: 'flex', justifyContent: 'space-around' }}>

					{children}

				</Content>


				<Sider style={{ color: '#fff', }}>
					NEWS
				</Sider>
			</Layout>

			<Footer style={{ textAlign: 'center', background: "#8f8f8f" }}> ©2020 Created by Pochtarenko Vladimir</Footer>

		</Layout>



	</>
	);
}

const S = {
	LogoImg: styled.img`
		float: left;
	width: 40px;
	margin: 10px 24px ;
	cursor: pointer;
	border-radius: 50%;
	`,
	Sitebar: styled.div`
		background:#001529;
		height:86.6vh;
		/* width:13vw; */
		color:#fff;
		font-size:1rem;
		& ul{
			list-style: none;
			padding: 0;
			text-align:center;
			
		}
		& li{
			display: flex;
  			align-items: center;
			
		}
		
		& a{
			color: #fff;
			text-decoration: none;
			height: 100%;
			width: 100%;
			padding: 20px ;
			
			}
			& a:hover
			 {
				transition: all .8s ease;
				background-color: #fff;
				color:#001529;
}
	`,
	Bg: styled.div`
	flex-basis: '800px' ;
	padding:10px;

	 @media (max-width: 1000px) {
		
		background: lightcoral;

  }
	
	`
}

export default App;
