import { Cards, Card } from 'nextra/components';
import { IoRocketSharp } from "react-icons/io5";

function MyCards() {
    return (
        <Cards>
            <Card
                icon={<IoRocketSharp />}
                title="Callout"
                href="/docs/guide/built-ins/callout"
                children={
                    <p>
                        Easy Set up in 5 minutes.
                    </p>
                }
            />
        </Cards>
    )
}

export default function MyApp() {
    return <MyCards />
}
