import User from '~/components/User';

import avt from '~/assets/img/avt.jpg';

import './RightBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function  RightBar() {
  const list_users = [
    {
      id: '1',
      user_name: 'user 1',
      user_avt: avt,
    },
    {
      id: '2',
      user_name: 'user 2',
      user_avt: avt,
    },
    {
      id: '3',
      user_name: 'user 3',
      user_avt: avt,
    },
    {
      id: '3',
      user_name: 'user 3',
      user_avt: avt,
    },
    {
      id: '3',
      user_name: 'user 3',
      user_avt: avt,
    },
    {
      id: '3',
      user_name: 'user 3',
      user_avt: avt,
    },
    {
      id: '3',
      user_name: 'user 3',
      user_avt: avt,
    },
  ];

  return (
    <div className="fixed top-0 w-96 h-screen bg-black text-white right-0 p-4 pr-20">
      <div className="flex w-full">
        <div className="w-full">
          <User />
        </div>
        <span className="right-bar-subtext">chuyển</span>
      </div>
      <h5 className="pt-4 opacity-50">Gợi ý cho bạn</h5>
      <div className="user-recomment py-4">
        <ul>
          {list_users.map((user, i) => (
            <li key={i} className="flex py-1">
              <div className="w-full">
                <User />
              </div>
              <span className="right-bar-subtext">theo dõi</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="contact mt-10 text-xs">
        <p className="py-2">Connect with me</p>
        <ul className="flex flex-col">
          <li>
            <FontAwesomeIcon icon={faFacebook} />
            <a href="https://www.facebook.com/daylahoangnguyen/" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
            <a href="https://www.instagram.com/may_hoangng/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
            <a href="https://x.com/HoangNguyen151" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
        </ul>
        <p className='pt-2'>2024 © PetShop | Hoang Nguyen Huy</p>
      </div>
    </div>
  );
}

export default RightBar;
