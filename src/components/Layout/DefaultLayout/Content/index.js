import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentImg from '~/assets/img/meo.jpg';
// import avt from '~/assets/img/avt.jpg';
import { faBookmark, faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

import './content.css';
import User from '~/components/User';

function Content() {
  return (
    <div className="content-wrapper w-screen min-h-screen -z-10 bg-black text-white ml-64 mr-96 px-40 py-4 relative">
      <div
        className="flex
        before:content-[''] before:absolute before:w-px before:h-screen before:top-0 before:left-auto before:right-0 before:bg-slate-300  before:opacity-20"
      >
        {/* <div className="user flex flex-row w-full h-8">
          <img src={avt} alt="user img" className="w-8 h-8 rounded-2xl cursor-pointer" />
          <h5 className="user-name h-full pl-3 py-1 text-sm font-medium cursor-pointer">User name</h5>
        </div> */}
        <div className='w-full'>
          <User />
        </div>
        <div className="more-icon cursor-pointer h-8">
          <FontAwesomeIcon icon={faEllipsis} className="content-icon" />
        </div>
      </div>
      <div className="caption py-3">
        <p>Em can nguoi ruoc em meo nay. Gia ca thuong luong</p>
      </div>
      <div>
        <img src={contentImg} alt="content-img" className="content-img rounded" />
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

export default Content;
