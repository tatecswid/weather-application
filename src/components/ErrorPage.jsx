export const ErrorPage = (props) => {

    return (
        <div className="error-page">
            <h1> { props.message } </h1>
            <h2> Try searching in this format: (City, State) </h2>
        </div>
    );
};