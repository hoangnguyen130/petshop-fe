import Content from "~/components/Layout/DefaultLayout/Content";
import LeftBar from "~/components/Layout/DefaultLayout/LeftBar";
import RightBar from "~/components/Layout/DefaultLayout/RightBar";

function Home() {
    return ( 
        <div>
            <LeftBar/>
            <Content/>
            <RightBar/>
        </div>
     );
}

export default Home;