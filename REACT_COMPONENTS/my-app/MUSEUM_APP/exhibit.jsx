// export a single primary value from a file
export default function Exhibit({ targetImageUrl }) {
    return (
        <div className="exhibit">
            <h3>Exhibit Component</h3>
            <img src={targetImageUrl} alt="Exhibit Thumbnail" />
        </div>
    );
}

