import avt from '~/assets/img/avt.jpg';


function User() {
  return (
    <div>
      <div className="user flex flex-row w-full h-8">
        <img src={avt} alt="user img" className="w-8 h-8 rounded-2xl cursor-pointer" />
        <h5 className="user-name h-full pl-3 py-1 text-sm font-medium cursor-pointer">User name</h5>
      </div>
    </div>
  );
}

export default User;
