import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import {
  faArrowRight,
  faBackwardStep,
  faChevronLeft,
  faChevronRight,
  faDesktop,
  faForwardStep,
  faHouse,
  faList,
  faListUl,
  faMagnifyingGlass,
  faMicrophone,
  faPause,
  faPen,
  faPlay,
  faPlus,
  faRepeat,
  faShuffle,
  faUsers,
  faVolumeHigh,
  faVolumeLow,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faBookmark, faHeart } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div class="grid grid-cols-5 gap-2 font-sans">
      {/* Home And Search Button */}
      <div className=" bg-zinc-900 col-span-1 grid-flow-col row-span-1 pl-5 pt-4 pb-3 mt-2 ml-1 mr-1 rounded-lg">
        <div className="flex mb-4 ">
          <FontAwesomeIcon className="text-white mt-1 text-xl" icon={faHouse} />
          <h3 className="text-white font-bold ml-5 mb-2 text-md mt-1 ">Home</h3>
        </div>
        <div className="flex">
          <FontAwesomeIcon className="text-white text-xl mt-1" icon={faMagnifyingGlass} />
          <h3 className="text-gray-300 font-semibold ml-5 mb-2  text-md">Search</h3>
        </div>
      </div>
      {/* Playlist With Music */}
      <div className="bg-zinc-900 col-span-3 mt-2 rounded-lg row-span-3">
        <div className="flex pt-4 pl-4 mb-4 justify-between">
          <div className="flex">
            <div className="bg-black text-white rounded-full pt-1 pr-3 pl-3 pb-1 mx-2">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="bg-black text-white rounded-full pt-1 pr-3 pl-3 pb-1">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>

          <div className="flex">
            <button className="pr-4 pl-4 pt-1 pb-1 bg-white text-dark font-bold rounded-full">Explore Premium </button>

            <div className="bg-black text-white rounded-full pt-1 pr-3 pl-3 pb-1 mx-2">
              <FontAwesomeIcon className="text-white text-xl" icon={faBell} />
            </div>
            <div className="bg-black text-white rounded-full pt-1 pr-3 pl-3 pb-1 mx-2">
              <FontAwesomeIcon className="text-white text-sm" icon={faUsers} />
            </div>

            <div className="bg-black text-white rounded-full w-8 h-8 mx-2  p-1  ">
              <img src="/src/assets/img/shirakawa_runa.png" className="w-full h-full object-cover rounded-full" alt="" />
            </div>
          </div>
        </div>
        <div className=" pr-3 pl-3 pb-3 mt-2">
          <img src="/src/assets/img/1202299.jpg" className="h-60 w-full object-cover" alt="" />
        </div>
        <div className="flex justify-between pr-3 pl-3 pb-2">
          <h2 className="text-xl text-white font-bold ml-6">Recently played</h2>
          <h4 className="text-md text-gray-300 font-semibold text-xs mt-1">Show All</h4>
        </div>
        <div className="flex justify-evenly pb-2">
          <div className="w-52 h-40 mt-2 rounded-lg  p-2 ml-5  bg-neutral-800">
            <div className="relative">
              <img src="/src/assets/img/heartspoti.png" alt="" />
              <FontAwesomeIcon className="bg-green-600 pr-4 pl-4 pt-3 pb-3 rounded-full absolute  right-2 bottom-2" icon={faPause} />
            </div>
            <h3 className="font-bold text-white text-sm mt-2">Liked Songs</h3>
            <p className="text-gray-300 font-semibold text-xs">122 songs</p>
          </div>

          <div className="w-52 mt-2  rounded-lg  p-2 ml-5 bg-neutral-800">
            <div className="relative">
              <img src="/src/assets/img/shirakawa_runa.png" className="h-48 w-52 object-cover" alt="" />
            </div>
            <h3 className="font-bold text-white text-sm mt-2">falling 4u</h3>
            <p className="text-gray-300 font-semibold text-xs">103 songs</p>
          </div>

          <div className="w-52 mt-2 rounded-lg  p-2 ml-5 bg-neutral-800">
            <div className="relative">
              <img src="/src/assets/img/kurokawa.jpeg" className="h-48 w-52 object-cover" alt="" />
            </div>
            <h3 className="font-bold text-white text-sm mt-2">lovely Songs</h3>
            <p className="text-gray-300 font-semibold text-xs">89 songs</p>
          </div>

          <div className="w-52 mt-2 rounded-lg  p-2 ml-5 bg-neutral-800">
            <div className="relative">
              <img src="/src/assets/img/shiki.jpeg" className="h-48 w-52 object-cover" alt="" />
            </div>
            <h3 className="font-bold text-white text-sm mt-2">my Fav Songs</h3>
            <p className="text-gray-300 font-semibold text-xs">37 songs</p>
          </div>
        </div>
      </div>

      {/* Liked Songs */}
      <div className="bg-zinc-900 col-span-1 mt-2 rounded-lg row-span-3">
        <div className="flex justify-between">
          <p className="text-white font-bold pl-4 mt-4">Liked Songs</p>
          <FontAwesomeIcon icon={faX} className="p-5 text-white" />
        </div>
        <div className="p-4">
          <img src="/src/assets/img/shirakawa_runa.png" className="rounded-xl" alt="" />
        </div>
        <div className="flex justify-between p-3">
          <div>
            <h2 className="font-bold text-white text-xl">GOOD IN GOODBYE</h2>
            <h3 className="font-semibold text-xs text-gray-300">NoitrX - Opang</h3>
          </div>

          <div className="flex justify-center  text-center">
            <FontAwesomeIcon icon={faHeart} className="text-pink-600 mx-4 mt-2" />
            <p className="text-white text-center ">...</p>
          </div>
        </div>
      </div>
      {/* Your Library */}
      <div className="bg-zinc-900 col-span-1 mt-2 rounded-lg row-span-3">
        <div className="flex justify-between">
          <div className="flex p-3">
            <FontAwesomeIcon icon={faBookmark} className="text-gray-300 mt-1 ml-2" />
            <h4 className=" mx-3 text-gray-300 font-bold ">Your Library</h4>
          </div>

          <div className="flex text-gray-200 font-semibold p-3 mt-2 mr-4">
            <FontAwesomeIcon className="mx-5" icon={faPlus} />
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        <div className="flex">
          <button className="font-semibold text-sm text-white bg-neutral-800 rounded-full pr-2 pl-2 pt-1 pb-1 mx-3">Playlists</button>
          <button className="font-semibold text-sm text-white bg-neutral-800 rounded-full pr-2 pl-2 pt-1 pb-1">Podcasts & Shows</button>
        </div>

        <div className="flex justify-between mt-4 pr-4 pl-4">
          <FontAwesomeIcon className="text-white text-xl mt-1" icon={faMagnifyingGlass} />
          <div className="flex">
            <h4 className="text-white font-bold mx-2">Recents</h4>
            <FontAwesomeIcon className="text-white mt-1" icon={faList} />
          </div>
        </div>

        <div className="flex justify-between p-4 bg-neutral-800 rounded-lg mr-2 ml-2 mt-3">
          <div className="flex">
            <div className="h-12 w-12">
              <img src="/src/assets/img/heartspoti.png" className="rounded h-full" alt="" />
            </div>
            <div className="mx-3">
              <h4 className="font-bold text-green-600">Liked Songs</h4>
              <div className="flex">
                <FontAwesomeIcon className="font-bold text-green-600 mr-1" icon={faPen} />
                <p className="font-semibold text-gray-400 text-xs">Playlist • 122 Songs</p>
              </div>
            </div>
          </div>
          <div className="mt-2 mr-4">
            <FontAwesomeIcon className="font-bold text-green-600" icon={faVolumeHigh} />
          </div>
        </div>

        <div className="flex justify-between p-4 rounded-lg mr-2 ml-2">
          <div className="flex">
            <div className="h-12 w-12">
              <img src="/src/assets/img/shirakawa_runa.png" className="rounded h-full w-full object-cover" alt="" />
            </div>
            <div className="mx-3">
              <h4 className="font-bold text-white">falling 4 u</h4>
              <div className="flex">
                <p className="font-semibold text-gray-400 text-xs">Playlist • imnotmey</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between p-4 rounded-lg mr-2 ml-2">
          <div className="flex">
            <div className="h-12 w-12">
              <img src="/src/assets/img/kurokawa.jpeg" className="rounded h-full w-full object-cover" alt="" />
            </div>
            <div className="mx-3">
              <h4 className="font-bold text-white">lovely songs</h4>
              <div className="flex">
                <p className="font-semibold text-gray-400 text-xs">Playlist • NoitrX</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between p-4 rounded-lg mr-2 ml-2">
          <div className="flex">
            <div className="h-12 w-12">
              <img src="/src/assets/img/shiki.jpeg" className="rounded h-full w-full object-cover" alt="" />
            </div>
            <div className="mx-3">
              <h4 className="font-bold text-white">my Fav Songs</h4>
              <div className="flex">
                <p className="font-semibold text-gray-400 text-xs">Playlist • reisyaa</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-5 bg-zinc-950 relative flex justify-between text-white p-3 shadow-xl bottom-36">
        <div className="flex">
          <div className="w-16 h-16  ">
            <img src="/src/assets/img/shirakawa_runa.png" className="w-full h-full object-cover rounded-xl" alt="" />
          </div>
          <div className="mt-3 ml-4">
            <h4 className="text-sm font-bold">Good In Goodbye</h4>
            <p className="text-xs font-semibold text-gray-300">Madison Beer</p>
          </div>

          <FontAwesomeIcon className="text-green-600 mt-4 ml-4" icon={faHeart} />
        </div>
        <div className="flex flex-col">
          <div className="ml-20">
            <FontAwesomeIcon className="mx-5 text-lg text-gray-300" icon={faShuffle} />
            <FontAwesomeIcon className="mx-5 text-lg text-gray-300" icon={faBackwardStep} />
            <FontAwesomeIcon className="mx-5 text-lg bg-white text-black rounded-full pr-2 pl-2 pt-1 pb-1" icon={faPause} />
            <FontAwesomeIcon className="mx-5 text-lg text-gray-300" icon={faForwardStep} />
            <FontAwesomeIcon className="mx-5 text-lg text-gray-300" icon={faRepeat} />
          </div>
          <div className="h-1 w-full bg-neutral-200 mt-4 progress flex flex-row">
           
            <div className="h-1 bg-blue-200" style={{ width: "30%" }}></div>
          
          </div>
        </div>

        <div className="text-sm">
          <FontAwesomeIcon className="mx-2 text-green-600" icon={faPlay} />
          <FontAwesomeIcon className="mx-2" icon={faMicrophone} />
          <FontAwesomeIcon className="mx-2" icon={faListUl} />
          <FontAwesomeIcon className="mx-2" icon={faDesktop} />
          <FontAwesomeIcon className="mx-2" icon={faVolumeLow} />
          <progress id="file" className="h-1 rounded-lg bg-white" value="32" max="100">
            {" "}
            32%{" "}
          </progress>
        </div>
      </div>
    </div>
  );
}

export default App;
