

import { Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle, Button } from "reactstrap";

const Cards = () => {
    return <Card className="my-3 ">
        <CardImg
            alt="Card image cap"
            src="https://tse3.mm.bing.net/th?id=OIP.EGxKwyP6ZU30bV7IfmnCCAHaGs&pid=Api&P=0&w=198&h=179"
            top
            width="100%"
        />
        <CardBody>
            <CardTitle tag="h5">
                Kain Sutra
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Kain Premium
            </CardSubtitle>
            <CardText>
                PE atau Polyester adalah jenis rayon yang dihasilkan dari campuran serat polyester dengan serat rayon.
            </CardText>
            <Button>
                Pesan
            </Button>
        </CardBody>
    </Card>
}

export default Cards;