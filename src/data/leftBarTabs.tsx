import { MdOutlineEdit, MdOutlineCloudUpload, MdImageSearch, IoShapesOutline } from 'react-icons/all'

type IconProps = {
    tabName: string,
    tabIcon: React.ReactNode,
}

const leftBarTabs: IconProps[] = [
    {
        tabName: 'Home',
        tabIcon: <MdOutlineEdit />
    },
    {
        tabName: 'Elements',
        tabIcon: <IoShapesOutline />
    },
    {
        tabName: 'Images',
        tabIcon: <MdImageSearch />
    },
    {
        tabName: 'Upload',
        tabIcon: <MdOutlineCloudUpload />
    }
]

export default leftBarTabs