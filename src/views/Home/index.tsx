import { Introduction } from '~/components/HomeComponent';
import { MarqueeSlide } from '~/components/Slider/MarqueSlide';
import './index.scss';
const Home = () => {
  return (
    <div className='home container-fluid pt-5'>
      <div className='container justify-content-center mb-4'>
        <Introduction
          img='https://d35b8pv2lrtup8.cloudfront.net/assets/img/social_book/homepage/two-image@2x.5d31fec3b670fb157306.png'
          list={[
            'Get brand offers',
            'Get the best tools to grow your social media outreach: Photo Studio, Video Background Remover, Photo Background Remover, Photo Cartoonizer, Stickers and Filters, Tag Researcher, IG Dmers, YouTube Builder, SocialBook Checker',
            'Find other influencers to collaborate with',
          ]}
          reverse={false}
          tip='Why do influencers love SocialBook?'
          title='SocialBook helps influencers to grow, make better content, and make money'
        />

        <Introduction
          img='https://d35b8pv2lrtup8.cloudfront.net/assets/img/social_book/homepage/two-image@2x.5d31fec3b670fb157306.png'
          list={[
            'Get brand offers',
            'Get the best tools to grow your social media outreach: Photo Studio, Video Background Remover, Photo Background Remover, Photo Cartoonizer, Stickers and Filters, Tag Researcher, IG Dmers, YouTube Builder, SocialBook Checker',
            'Find other influencers to collaborate with',
          ]}
          reverse={true}
          tip='Why do influencers love SocialBook?'
          title='SocialBook helps influencers to grow, make better content, and make money'
        />

        {/* <h1 className='text-center logo mb-5'>iConnect Global</h1> */}

        {/* <h3 className='text-center'>
          <b>Global</b>
        </h3> */}
        {/* <div className='row d-flex justify-content-center'>
          {topdata.map((item, i) => (
            <div key={i} className='col-12 col-md-4 col-lg-3  mb-4'>
              <CardTop
                cardTitle={item.title}
                cardSubtitle={item.sub}
                value={item.value}
                color={item.color}
              />
            </div>
          ))}
        </div> */}
        {/* <div className='text-center mt-5'>
          <Title title='Influencers to grow' text='Why do influencers love iConnect?' />
        </div> */}
        <div className='row d-flex mt-3 justify-content-center'>
          {' '}
          {/* data-aos='fade-up'*/}
          {/* <About
            img={idol.imag}
            avg={idol.avg}
            desc={idol.desc}
            exp={idol.exp}
            follow={idol.follow}
          /> */}
        </div>
        {/* <CoverCard /> */}
      </div>
      <div className='row d-flex justify-content-center mh-100'>
        <MarqueeSlide />
      </div>
      {/* <CitiesSlider /> */}
    </div>
  );
};

export default Home;
