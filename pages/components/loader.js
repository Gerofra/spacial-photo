import loaderstyles from '../../styles/Loader.module.css'
import Emoji from '../components/Emoji.js'

export default function Loader() {

    return (
        <div id="loader" className={loaderstyles.loaderBox}>
            <div id="loader" className={loaderstyles.loaderContainer}>
                <Emoji symbol="🚀" label="rocket"/>
            </div>           
        </div>
    )

}