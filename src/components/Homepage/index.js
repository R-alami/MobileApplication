import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


/* Styled Components */
const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const SearchWrapper = styled.div`
	font-family: 'Poppins', sans-serif;
	display: flex;
	align-content: center;
	align-items: center;
	width: 70%;
	height: 40px;
	padding: 5px 10px;
	border-radius: 50px;
	border: 1px solid #D3D3D3;

	.search-icon{
		font-size: 20px;
	}
`;

const Search = styled.input`
	width: 100%;
	border: none;
	margin: 10px;
	outline: none;
	font-weight: 400;
	font-size: .9rem;
	opacity: .5;
`;


const Homepage = () => {
	return (
		<Wrapper>
			<SearchWrapper>
				<FontAwesomeIcon className="search-icon" icon={faSearch} color="#D3D3D3" />
				<Search type="text" name="search" placeholder="Type your word's..." />
			</SearchWrapper>
		</Wrapper>
	)

}

export default Homepage