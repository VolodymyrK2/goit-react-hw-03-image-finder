import { ThreeDots } from  'react-loader-spinner'
const Loader = () => {
    return (
        <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
            wrapperStyle={{
                
                marginTop: 180,
                marginLeft: "auto",
                marginRight: "auto",
               }}
wrapperClassName=""
visible={true}
 />
    )
}
export default Loader;