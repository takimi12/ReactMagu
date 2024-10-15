import './Comments.scss'; 

interface SubComment {
    username: string;
    comment: string;
    subComments?: SubComment[]; 
  }
  
  interface Comment {
    username: string;
    comment: string;
    subComments?: SubComment[]; 
  }

  interface Data {
    data: Comment[];
  }


export const Comments = ({data} :Data) => {


return (
<div>
    {data.map(el => 
    <div className="firstLevel" key={el.comment}>
        <p>{el.username}</p>
    <p>{el.comment}</p>
        <div>{el.subComments?.map(el2 => 
            <div className='secondLevel' key={el2.comment}>
            <p>{el2.username} seeeecond</p>
            <p>{el2.comment}</p>
            <div className='thirdLevel'> {el2.subComments?.map(el3  =>
                <div key={el3.comment}>
                <p>{el3.username}</p>
                <p>{el3.comment}</p>
                <div className='fourthLevel'>{el3.subComments?.map(el4 =>
                <div key={el4.comment}>
                <p>{el4.comment}</p>
                <p>{el4.username}</p>

                </div>
                )}
                </div>
                </div>
                )}</div>
            </div>
            )}</div>
    </div>)}
</div>

        );
  };