import React from 'react';
import styled from 'styled-components';
// import Articles from '../../modules/Articles';
import AboutMe from '../../containers/AboutMe';
import Banner from '../../containers/Banner';
import Experience from '../../containers/Experience';
import Projects from '../../modules/Projects';
import Contact from '../../containers/Contact';
import image from '../../../assets/images/background.png';

const HomePage = styled.div`
	  min-height: 100vh;
	   
	  width: 100%;
`;

const experience = [{
	date: 'Fev/2018  Atual',
	job: 'Desenvolvedor Full-Stack',
	company: 'Accenture',
	description: 'Atuando no desenvolvimento e integração de serviços corporativos. Desenvolvimento de sistemas orientados para a indústria, controle de estoque e logística. Participação de reuniões técnicas e tomadas de decisão de modelagem de aplicações. Projetos desenvolvidos e planejados, empregando metodologias ágeis como o SCRUM.',
	skills: 'React, Node.js, GraphQL, PostgreSQL, AWS, Material Design, TypeORM e Jest.',
},
{
	date: 'Ago/2016  Out/2017',
	job: 'Desenvolvedor Full-Stack',
	company: 'ilegra',
	description: 'Atuando nas frentes de desenvolvimento de sistemas, para controle de vendas, marketing, captação de novos clientes com desenvolvimento de serviços para web.	',
	skills: 'AngularJS, HTML5, CSS3, Javascript, SASS, JQuery, PHP e Wordpress.',
},
{
	date: 'Ago/2015  Ago/2016',
	job: 'Estágio em Desenvolvimento Web',
	company: 'Marketdata Solutions',
	description: 'Desenvolvimento e manutenção de hotsites, landing pages e portais.',
	skills: 'HTML5, CSS3, Bootstrap, jQuery, SASS e AngularJS',
},
{
	date: 'Fev/2013  Jan/2015',
	company: 'Desenvolvedor Freelancer',
	description: 'Desenvolvimento e manutenção de web sites e landing pages.',
	skills: 'HTML5, CSS3, JavaScript, Bootstrap, jQuery e SASS',
}];

const skills = [{
	skill: 'HTML / CSS',
	percent: '90',
},
{
	skill: 'JavaScript',
	percent: '85',
},
{
	skill: 'React',
	percent: '85',
},

{
	skill: 'Node.js',
	percent: '80',
},
{
	skill: 'GraphQl',
	percent: '75',
},
{
	skill: 'JQuery',
	percent: '75',
},
{
	skill: 'MongoDB',
	percent: '70',
},
{
	skill: 'C#',
	percent: '65',
},
{
	skill: 'Angular',
	percent: '60',
},
{
	skill: 'SQL',
	percent: '60',
},
{
	skill: 'AWS',
	percent: '55',
}];

const Home = () => (
	<HomePage>

		<Banner
			textBanner={['Desenvolvedor Full-Stack.', 'Desenvolvimento Web.']}
			backgroundBanner={image}
		/>


		<AboutMe
			title="Olá, me chamo Otavio Sanchez"
			subTitle="Desenvolvedor, entusiasta de tecnologia, autodidata e apaixonado por código."
			skills={skills}
		>
			<p>
				{'Sou desenvolvedor desde de 2013, possuo experiência com diversas tecnologias web e na criação de sites e sistemas web. Busco sempre estar conectado a novas tendências e inovações tecnológicas.'}
			</p>
			<p>
				{'Bacharelando em Ciência e Tecnologia pela Universidade Federal do ABC, um curso multidisciplinar que me permitiu abrir a mente e a buscar novos horizontes através da tecnologia da informação.'}
			</p>
			<p>
				{'Atualmente tenho 26 anos, moro em São Paulo, amo futebol, filmes, séries, animes e games.'}
			</p>

		</AboutMe>
		{/* <Articles /> */}

		<Experience list={experience} />

		<Projects />

		<Contact />

	</HomePage>
);

export default Home;
