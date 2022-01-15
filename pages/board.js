const Board = () => {
    return ( 
        <div>
            <h1>Board</h1>
            <p>I am saying Board</p>
            <br/>
            <Foard 
            name = {'Foard'}
            paragraph='I am saying Foard'
            />
        </div>
     );
}
 
export default Board;

const Foard = ({name,paragraph}) => {
    return ( 
        <div>
            <h1>{name}</h1>
            <p>{paragraph}</p>
        </div>
     );
}
 