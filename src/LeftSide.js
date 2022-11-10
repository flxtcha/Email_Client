import { SearchOutlined } from '@ant-design/icons'; 
import { Input, Card} from 'antd';
const { Meta } = Card;




const LeftSide = () => {
    return (  
        <div className="LeftSide">  
            <div id="search"><Input className ="search" placeholder="Search" suffix={<SearchOutlined/>}></Input></div>
            <div id="inbox">
            <p>INBOX</p>
            <ol>
                <li><div className='Email'></div></li>
                <li><div className='Email'></div></li>
                <li><div className='Email'></div></li>
                <li><div className='Email'></div></li>
                <li><div className='Email'></div></li>
            </ol>
            
            </div>



        </div>
    );
}
 
export default LeftSide;