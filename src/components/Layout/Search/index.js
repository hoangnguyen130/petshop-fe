import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import axios from 'axios';
import { useRef, useState, useEffect } from 'react';
import 'tippy.js/dist/tippy.css';
import useDebounce from '~/hooks/useDebounce';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const debounced = useDebounce(searchValue, 700);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      return;
    }
    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: 'b4880373e5e7462cf3059ff7f7188e5d',
          query: debounced,
        },
      })

      .then((res) => {
        setSearchResult(res.data.results);
      });
    // eslint-disable-next-line
  }, [debounced]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  return (
    <Tippy
      interactive
      //   visible
      trigger="click"
      placement="right"
      //   animation='shift-away'
      render={(attrs) => (
        <div
          className="search w-80 h-screen px-4 text-white bg-black rounded-lg border-r border-neutral-800"
          tabIndex="-1"
          {...attrs}
        >
          <h2 className=" text-2xl px-2 py-6">Tìm kiếm</h2>
          <input
            ref={inputRef}
            value={searchValue}
            className="relative w-full p-2 bg-neutral-800 rounded-md focus:outline-none"
            type="text"
            placeholder="Tìm kiếm..."
            spellCheck={false}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && (
            <button onClick={handleClear} className="absolute pt-2 px-1 opacity-50 right-6">
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            
          )}
          <div className='w-full h-px bg-white opacity-30 mt-6 '></div>
          
        </div>
      )}
    >
      <span className="text w-full">Tìm kiếm</span>
    </Tippy>
  );
}

export default Search;
