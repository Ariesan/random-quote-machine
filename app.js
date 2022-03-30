function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("")

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();

    }, [])

    const getNewQuote = () => {
        const colors = [
            "#7cf78d",
            "#70f2e8",
            "#f095e2",
            "#eaab9f",
            "#d4d41f",
            "#7793d2",
            "#e89c9c",
            "#94f3c9",
            "#edaf5b",
            "#da9c98",
            "#f2b0a2",
            "#98a2f9",
        ];    

        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        setRandomQuote(quotes[randIndex])
        setColor(colors[randColorIndex])
    }


    return (
        <div style={{backgroundColor: color, minHeight: "100vh"}}>        
        <div className="container pt-5">
            <div className="bg-light p-5 rounded-lg m-3">
                <div className="card text-center" >
                    <div className="card-header" display-5>Quotes to motivate You</div>             
                    <div className="card-body">
                        <br />
                        <blockquote class="blockquote mb-0">
                            { randomQuote ? (
                            <>                    
                            <p className="card-text">{randomQuote.text}</p>
                            <br />                  
                            <footer class="blockquote-footer">
                            <cite title="Source Title">{randomQuote.author || "Anonymous"}</cite>
                            </footer>
                            </>
                            ) : (
                            <h2>Loading</h2>
                            )}

                            <a href="https://twitter.com/ElisabethAnggia" className="btn btn-primary" target="blank">
                                <i className="fa fa-twitter"></i>
                            </a>
                            
                            <a href="https://www.instagram.com/elisabeth_anggia/" className="btn btn-danger" target="blank">
                                <i className="fa fa-instagram"></i>
                            </a> 

                        </blockquote>
                        <br />
                        <div className="column">
                        <button onClick={getNewQuote} type="button" className="btn btn-dark ml-3">New Quote</button>
                        </div>
                    </div>         
                </div>           
            </div>
            <div className="alert alert-primary text-center" role="alert">
                Build by <a href="https://ariesan.github.io/">Ariesan</a>
            </div>            
            
        </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))

