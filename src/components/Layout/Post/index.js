import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

import contentImg from '~/assets/img/meo.jpg';

import './post.css';
import User from '~/components/User';

function Post() {
  const listImg = [contentImg, contentImg, contentImg, contentImg, contentImg, contentImg, contentImg];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="content-wrapper max-w-screen h-auto bg-black text-white ml-64 mr-96 px-40 py-4">
      <div
        className="flex"
        // "before:content-[''] before:absolute before:w-px before:h-screen before:top-0 before:left-auto before:right-0 before:bg-slate-300  before:opacity-20"
      >
        <div className="w-full">
          <User />
        </div>
        <div className="more-icon cursor-pointer h-8">
          <FontAwesomeIcon icon={faEllipsis} className="content-icon" />
        </div>
      </div>
      <div className="caption py-3">
        <p>Em can nguoi ruoc em meo nay. Gia ca thuong luong</p>
      </div>
      <div className="imgs">
        <Slider {...settings}>
          {listImg.map((item ,i) => (
            <img src={item} alt="content-img" className="content-img rounded" />
          ))}
        </Slider>
      </div>
      <div className="flex py-2 ">
        <div className="w-full">
          <FontAwesomeIcon icon={faHeart} className="content-icon" />
          <FontAwesomeIcon icon={faComment} className="content-icon" />
        </div>
        <div>
          <FontAwesomeIcon icon={faBookmark} className="content-icon" />
        </div>
      </div>
      <div className="like-counter text-white">
        <p>hoang va nhung nguoi khac da thich</p>
      </div>
      <div className="mt-2">
        <input
          className="w-full py-1 bg-transparent border-none focus:outline-0"
          type="text"
          placeholder="Thêm bình luận..."
        />
      </div>
      <div className="w-full h-px bg-slate-300 opacity-20 mt-6"></div>
    </div>
  );
}

export default Post;
