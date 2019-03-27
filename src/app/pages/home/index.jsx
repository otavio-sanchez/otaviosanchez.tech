import React from 'react';
import styled from 'styled-components';
// import Articles from '../../modules/Articles';
import AboutMe from '../../containers/AboutMe';
import Banner from '../../containers/Banner';
import Skills from '../../containers/Skills';
import News from '../../modules/News';
import Contact from '../../containers/Contact';
import image from '../../../assets/images/background.jpg';

const HomePage = styled.div`
	  min-height: 100vh;
	   
	  width: 100%;
`;


const Home = () => (
	<HomePage>

		<Banner
			textBanner="Desenvolvedor Full-Stack."
			backgroundBanner={image}
		/>


		<AboutMe
			title="Ola, me chamo Otavio Sanchez"
			subTitle="Desenvolvedor, entusiasta de tecnologia, autodidata e apaixonado por código."
			text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		>
			<Skills list={[
				{
					skill: 'Node',
					percent: '10',
				},
				{
					skill: 'GraphQl',
					percent: '80',
				},
			]}
			/>


		</AboutMe>
		{/* <Articles /> */}

		<News />

		<Contact />

	</HomePage>
);

export default Home;
