import { FilterOutlined, MailOutlined, SendOutlined, UnorderedListOutlined, ClockCircleOutlined, DeleteOutlined, WarningOutlined, SettingOutlined} from '@ant-design/icons'; 

const Nav = () => {
    return (  
   
            <div className="Nav">

                <div className='Tiles' id="TopLeft"><FilterOutlined/></div>
                <div className='Tiles'><MailOutlined /><p>Inbox</p></div>
                <div className='Tiles'><SendOutlined/><p>Sent</p></div>
                <div className='Tiles'><UnorderedListOutlined/><p>Drafts</p></div>
                <div className='Tiles'><ClockCircleOutlined/><p>Reminders</p></div>
                <div className='Tiles'><DeleteOutlined /><p>Bin</p></div>
                <div className='Tiles'><WarningOutlined/><p>Spam</p></div>
                <div className='Tiles' id="settings"><SettingOutlined/></div>
                    
                    
                    
                    
                    
                    
                    
                    
                
                
            </div>
    );
}
 
export default Nav;