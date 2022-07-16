import Document,{Html,Head,Main, NextScript} from "next/document"

class MyDocument extends Document{
    render(){
        return (
            <Html lang="tr">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <div id="overlays"></div>
                </body>
            </Html>
        )
    }
}

export default MyDocument