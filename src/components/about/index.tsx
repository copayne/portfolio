import ContentContainer from '~/components/common/ContentContainer';
import { getHighlightedText } from '~/helpers/utils';

const ABOUT_CONTENT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta rhoncus lectus, at lobortis magna semper id. Suspendisse leo justo, cursus et pellentesque id, rhoncus vitae risus.";
const ABOUT_CONTENT_2 = "Pellentesque convallis magna eu lobortis semper. Quisque auctor mi hendrerit lacus dignissim, quis fermentum orci varius. Donec at justo eu dolor tempor tempus.";

const About = () => (
  <ContentContainer id="about">
    <div className="mt-[5%] ml-[5%]">
      <div className="container flex flex-col items-start">
      <p className="text-sm sm:text-4xl text-light-primary dark:text-dark-primary font-thin mb-6">
        About
      </p>
      <p className="text-sm sm:text-xl w-1/2">
        { getHighlightedText(ABOUT_CONTENT, ['lobortis', 'pellentesque', 'hendrerit']) }
      </p>
      </div>
      <br />
      <div className="container flex flex-col items-start">
      <p className="text-sm sm:text-4xl text-light-primary dark:text-dark-primary font-thin mb-6">
        Skills
      </p>
      <p className="text-sm sm:text-xl w-1/2">
        { getHighlightedText(ABOUT_CONTENT, ['lobortis', 'pellentesque', 'hendrerit']) }
      </p>
      </div>
    </div>
  </ContentContainer>
);

export default About;