import { useRouter } from "next/router"
import Image from "next/image"
import Tittle from "../../components/Tittle"
import Myimage from "../../images.json"
import { Button, Card } from "react-bootstrap"
import Style from "../../styles/id.module.css"

const Games = () => {
    const router = useRouter()
    const { id }: any = router.query
    return(<>
    <Tittle />
   <Card className={Style.Card}>
       <Card.Title className={Style.CardTitle} >
           {id}
       </Card.Title>
       <img src={ Myimage.Valorant.url } width={500} height={500} alt="Image" />
       </Card>
       <div className={Style.btn}>
   <Button className={Style.btn_in}>Download</Button>
   <Button className={Style.btn_in}>Official site</Button>
       </div>
    </>)
}

export default Games