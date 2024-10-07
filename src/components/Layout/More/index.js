// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

function More() {
  return (
    <Tippy
      interactive
      placement={'top-start'}
      // visible
      render={(attrs) => (
        <div className="bg-neutral-800 w-60 rounded-md">
          <ul>
            <li>Cài đặt</li>
            <li>Hoạt động của bạn</li>
            <li>Đã lưu</li>
            <li>Chuyển chế độ</li>
            <li>Báo cáo sự cố</li>
            <li>Chuyển tài khoản</li>
            <li>Đăng xuất</li>
          </ul>
        </div>
      )}
    >
      {/* <span>
        <FontAwesomeIcon className="icon" icon={faBars} />
      </span> */}
      <span className="text w-full">Xem thêm</span>
    </Tippy>
  );
}

export default More;
