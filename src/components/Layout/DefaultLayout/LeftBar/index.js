import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCirclePlus, faCompass, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import logo from '~/assets/img/logo.png';
import avt from '~/assets/img/avt.jpg';
import './leftBar.css';
import More from '../../More';
import Search from '../../Search';

function LeftBar() {
  return (
    <div
      className="wrapper flex flex-col items-center bg-black h-screen w-64 p-4 mr-px fixed z-10
        before:content-[''] before:absolute before:w-px before:h-screen before:top-0 before:left-auto before:right-0 before:bg-slate-300  before:opacity-20"
    >
      <span className="logo w-40 py-8 cursor-pointer">
        <img src={logo} alt="logo" />
      </span>
      <ul className="left-bar-list text-white w-full select-none">
        <li>
          <FontAwesomeIcon className="left-bar-icon" icon={faHouse} />
          <span className="text">Trang chủ</span>
        </li>
        <li>
          <FontAwesomeIcon className="left-bar-icon" icon={faMagnifyingGlass} />
          <Search />
        </li>
        <li>
          <FontAwesomeIcon className="left-bar-icon" icon={faCompass} />
          <span className="text">Khám phá</span>
        </li>
        <li>
          <FontAwesomeIcon className="left-bar-icon" icon={faFacebookMessenger} />
          <span className="text">Tin nhắn</span>
        </li>
        <li>
          <FontAwesomeIcon className="left-bar-icon" icon={faHeart} />
          <span className="text">Thông báo</span>
        </li>
        <li>
          <FontAwesomeIcon className="left-bar-icon" icon={faCirclePlus} />
          <span className="text">Tạo bài viết</span>
        </li>
        <li>
          <img src={avt} alt="logo" className="w-6 rounded-lg" />
          <span className="text">Trang cá nhân</span>
        </li>
        <li>
          <div>
            <FontAwesomeIcon className="left-bar-icon" icon={faBars} />
          </div>
          <More />
        </li>
      </ul>
    </div>
  );
}

export default LeftBar;
