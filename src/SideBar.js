import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {

	return (
		<div className="fixed top-0 left-0 h-screen w-16 m-0 p-0 flex flex-col bg-primary text-secondary shadow-lg ">
			<SideBarIcon icon={<FaFire side="28"/>}/>
			<SideBarIcon icon={<BsPlus side="32"/>}/>
			<SideBarIcon icon={<BsFillLightningFill side="20"/>}/>
			<SideBarIcon icon={<FaPoo side="20"/>}/>
		</div>
	)
}

const SideBarIcon = ( { icon }) => (
	<div className="sidebar-icon">
		{icon}
	</div>
);

export default SideBar;