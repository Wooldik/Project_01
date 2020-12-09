import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Book from '../Book/Book'


const OnlineLibrary = () => {

	const books = useSelector(state => state.books)
	const userClass = useSelector(state => state.users[0].class)


	return (<S.List>
		{books.class[userClass].map((bookObj) => {

			return (<Book
				key={bookObj.id}
				book={bookObj.book}
				download={bookObj.src}
			/>)

		})}
	</S.List >)

}

const S = {
	List: styled.div`
	display: flex;
	flex-wrap: wrap;
	overflow: hidden;
	justify-content:space-around;
`
}

export default OnlineLibrary;