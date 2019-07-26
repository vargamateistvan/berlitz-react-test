import React from 'react';
import { Button, Card, Select, Tabs, Typography } from 'antd';

const { Option } = Select
const { TabPane } = Tabs
const { Title, Text } = Typography;

type Props = {
    product: {
        title: string
        subTitle: string
        description: string
        detail: string
        colors: any
        price: string
        sale: string
    }
}

function Product(props: Props) {
    const { product } = props

    const [selectedColor, setSelectedColor] = React.useState("black")
    const [buttonText, setButtonText] = React.useState("ADD TO CART")
    const [isLoadingButton, setIsLoadingButton] = React.useState(false)

    // @ts-ignore
    const handleColorChange = value => {
        setSelectedColor(value)
    }

    const addToCart = () => {
        setIsLoadingButton(true)
        setButtonText("LOADING...")

        setTimeout(() => {
            setIsLoadingButton(false)
            setButtonText("VIEW CART")
        }, 2000)
    }

    const getProductImage = () => {
        return product.colors[selectedColor]
    }

    return (
        <Card>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "row wrap"
            }}>
                <div style={{
                    maxWidth: 500,
                }}>
                    <Title level={1}>{ product.title }</Title>
                    <Text type="secondary">{ product.subTitle }</Text>
                    <Tabs 
                        size="default"
                        style={{
                            minHeight: 250,
                            marginTop: 25
                        }}
                    >
                        <TabPane tab="DESCRIPTION" key="1">{ product.description }</TabPane>
                        <TabPane tab="DETAIL" key="2">{ product.detail }</TabPane>
                    </Tabs>

                    <div 
                        style={{
                            fontSize: 30,
                            marginBottom: 25
                        }}
                    >
                        {product.sale ? 
                            <div> 
                                <Text strong style={{marginRight: 20}}>{ product.sale }</Text>
                                <Text strong delete type="secondary">{ product.price }</Text>
                            </div>
                        : <Text strong>{ product.price }</Text>}
                    </div>

                    <Text
                        strong
                        style={{
                            marginTop: 25,
                            fontSize: 12
                        }}
                    >
                        COLORS
                    </Text>
                    <br/>
                    <Select
                        defaultValue={selectedColor}
                        onChange={handleColorChange}
                        style={{
                            marginBottom: 50
                        }}
                    >
                        {Object.keys(product.colors).map(color => {
                            return <Option value={color} key={color}>{ color.toUpperCase() }</Option>
                        })}
                    </Select>

                    <br/>

                    <Button 
                        type="primary"
                        size="large"
                        loading={isLoadingButton}
                        onClick={addToCart}
                    >
                        {buttonText}
                    </Button>

                </div>
                <img 
                    alt="product" 
                    src={getProductImage()} 
                    style={{
                        width: 500,
                        height: "100%",
                    }}
                />
            </div>
        </Card>
    )
}

export default Product