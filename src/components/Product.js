import React from 'react';
import { Button, Card, Select, Tabs, Typography } from 'antd';

const { Option } = Select
const { TabPane } = Tabs
const { Title, Text } = Typography;

function Product() {
    const [selectedColor, setSelectedColor] = React.useState("black")
    const [buttonText, setButtonText] = React.useState("ADD TO CART")
    const [isLoadingButton, setIsLoadingButton] = React.useState(false)

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
        return `/images/ath-msr7-${selectedColor}.jpg`
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
                    <Title level={1}>Audio-Technica ATH-MSR7</Title>
                    <Text type="secondary">2017 Best Headphones of the Year Award Winner</Text>
                    <Tabs 
                        size="default"
                        style={{
                            minHeight: 250,
                            marginTop: 25
                        }}
                    >
                        <TabPane tab="DESCRIPTION" key="1">
                            Springing from Audio-Technica’s rich heritage in professional audio, the ATH-MSR7 Over-Ear High-Resolution Audio Headphones are designed to reproduce Hi-Res Audio, allowing users to hear music the way it was intended. The over-ear headphones are outfitted with exclusive 45 mm True Motion Drivers, which utilize lightweight voice coils, a custom-mounted printed circuit board and specially designed diaphragm to improve transient response and minimize sound distortion for rich, detailed audio reproduction. 
                        </TabPane>
                        <TabPane tab="DETAIL" key="2">
                            The ATH-MSR7 headphones also feature multi-layered air damping technology for extended mid-to-low frequency response. The housings, designed to “mirror” the full shape of the ear, are constructed of an aluminum/magnesium mix, layered to provide a lightweight, rigid structure that reduces unwanted resonance. Three precisely placed vents within these layers work to control air flow and improve dynamics.
                        </TabPane>
                    </Tabs>

                    <div 
                        style={{
                            fontSize: 30,
                            marginBottom: 25
                        }}
                    >
                        <Text strong style={{marginRight: 20}}>$59.99</Text>
                        <Text strong delete type="secondary">$89.99</Text>
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
                        <Option value="black">Black</Option>
                        <Option value="brown">Brown</Option>
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