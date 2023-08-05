import './css/app.css'
import Card from "./pages/Card.jsx";
import MyTODO from "./pages/MyTODO.jsx";
import {useState} from "react";
import Note from "./pages/Note.jsx";
import Prop from "./pages/Prop.jsx";
import Counter from "./pages/Counter.jsx";
import Todo from "./pages/Todo.jsx";
import Water from "./pages/Water.jsx";
import Chips from "./pages/Chips.jsx";
function App() {
    const [block,setBlock] = useState('Card')
    const [mode,setMode] = useState(true)
    const btn = (selectBlock) =>{
        setBlock(selectBlock)
    }
    const onChangeThema = () => {
        setMode(prevThema => !prevThema);
    }

    return(
        <>
            <h1>React Home work</h1>
            <div className='button-block'>
                <div className='button-item'>
                    <button onClick={()=>btn('Card')}  className='button-click'>Card</button>
                </div>
                <div className='button-item'>
                    <button onClick={()=>btn('MyTODO')} className='button-click'>MyToDo</button>
                </div>
                <div className='button-item'>
                    <button onClick={()=>btn('Note')} className='button-click'>Note</button>
                </div>
                <div className='button-item'>
                    <button onClick={()=>btn('Prop')} className='button-click'>Prop</button>
                </div>
                <div className='button-item'>
                    <button onClick={()=>btn('Counter')} className='button-click'>Counter</button>
                </div>
                <div className='button-item'>
                    <button onClick={()=>btn('Todo')} className='button-click'>Todo</button>
                </div>
                <div className='button-item'>
                    <button onClick={()=>btn('Water')} className='button-click'>Water</button>
                </div>
                <div className='button-item'>
                    <button onClick={()=>btn('Chips')} className='button-click'>Chips</button>
                </div>
            </div>
            {block === 'Card' && <Card />}
            {block === 'MyTODO' && <MyTODO />}
            {block === 'Note' && <Note/>}
            {block === 'Prop' && <Prop thema={mode} onChange={onChangeThema} />}
            {block === 'Counter' && <Counter title='Hello' info='Its first component'/>}
            {block === 'Counter' && <Counter title='Hi' info='Its second component'/>}
            {block === 'Todo' && <Todo/>}
            {block === 'Water' && <Water/>}
            {block === 'Chips' && <Chips/>}
        </>
    )
}

export default App
