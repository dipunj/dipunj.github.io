import { GetStaticProps } from 'next';
import index from '../components/view/home';
import githubAPI from '../components/data/github';

export const getServerSideProps: GetStaticProps = async ({ query }) => {
	const res = await fetch(githubAPI.user);
	const githubProfile = await res.json();
	return { props: { githubProfile } };
};

export default index;
