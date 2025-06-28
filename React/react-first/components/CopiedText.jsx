
const CopiedText = ({ copied }) => {
    return <div>
        {
            copied && (<p style={{ position: "absolute", bottom: "3rem"}}>Copied to clipboard</p>)
        }
    </div>
}

export default CopiedText;