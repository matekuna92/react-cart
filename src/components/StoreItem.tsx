import { Card, Button } from "react-bootstrap";

function StoreItem({ id, name, price, imgUrl }) {
    return (
        <Card className='h-100'>
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{objectFit: "cover"}}>
            </Card.Img>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-2'> {name}</span>
                    <span className='ms-2 text-muted'> {`${price} Ft`}</span>
                </Card.Title>
                <div className='mt-auto'>
                    <Button className='w-100'>
                        + Add To Cart
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default StoreItem;